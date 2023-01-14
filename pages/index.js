import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import getAxiosInstance from "../utils/api/getAxiosInstance";
import { useQuery } from "react-query";
import BookShelfRow from "../components/BookShelfRow";
import Layout from "../components/Layout";
import { getShelfData } from '../utils/api/shelf'

export default function Home() {
  const { t } = useTranslation("common");

  const { isLoading, error, data=[] } = useQuery("shelves", async () => {
    const getVirtualShelves = async () => {
      const [ currentlyReadShelf, readShelf, shelvesData ] = await Promise.all([getShelfData('currently-reading'), getShelfData('read'), getAxiosInstance({ auth: true })
      .get("/user/shelves?has_books=true")
      .then((res) => res.data)]) 
      
      return [...(currentlyReadShelf.items.length ? { title: t("currentlyReading"), shelfUrl: "currently-reading", items: currentlyReadShelf.items } : {}),
       ...(readShelf.items.length ? { title: t("read"), shelfUrl: "read", items: readShelf.items } : {})]
    }
      return [...(await getVirtualShelves()), ...shelvesData];
  });

  

  return (
    <Layout>
      <div>
        {[
          { title: t("currentlyReading"), shelfUrl: "currently-reading" },
          { title: t("read"), shelfUrl: "read" },
            ...(data.map( (shelf) => {
              return{title: shelf.name, shelfUrl: shelf.id, items: shelf.items}
          }))
        ].map((val, index) => {
          return (
            <BookShelfRow
              key={val.title}
              title={val.title}
              items={val.items}
              shelfUrl={val.shelfUrl}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
