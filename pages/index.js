import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import getAxiosInstance from "../utils/api/getAxiosInstance";
import BookShelfRow from "../components/BookShelfRow";
import Layout from "../components/Layout";
import { useQuery } from "react-query";

export default function Home() {
  const { t } = useTranslation("common");

  const { isLoading, error, data=[] } = useQuery("shelves", () => {
   return getAxiosInstance({ auth: true })
      .get("/user/shelves?has_books=true")
      .then((res) => res.data)
      .then((res) => {
        console.log('rahaf',res)
        return res

      });
     
  });

  return (
    <Layout>
      <div>
        {[
          { title: t("currentlyReading"), shelfUrl: "currently-reading" },
          { title: t("read"), shelfUrl: "read" },
            ...(data.map( (shelf) => {
              return{title: shelf.name, shelfUrl: shelf.id}
          }))
        ].map((val, index) => {
          return (
            <BookShelfRow
              key={val.title}
              title={val.title}
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
