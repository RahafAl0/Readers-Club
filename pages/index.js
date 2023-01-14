import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import getAxiosInstance from "../utils/api/getAxiosInstance";
import { useQuery } from "react-query";
import BookShelfRow from "../components/BookShelfRow";
import Layout from "../components/Layout";
import { fetchShelfData } from "../utils/api/shelf";

const SHELVES_LIMIT = 4;

export default function Home() {
  const { t } = useTranslation("common");

  const {
    isLoading,
    error,
    data = [],
  } = useQuery("shelves", async () => {
    const apiFetch = getAxiosInstance({ auth: true })
    
    const shelvesInfo = await apiFetch
    .get("/user/shelves?has_books=true")
    .then((res) => res.data)
    .then((data) => {
      return data.slice(0, SHELVES_LIMIT)
    })

    const shelvesData = (await Promise.all(shelvesInfo.map((shelf) => {
      apiFetch.get(`/user/shelves/${shelf.id}/books?limit=${SHELVES_LIMIT}`)
    
    }))).map((res) => res.data)

    const [currentlyReadShelf, readShelf] = await Promise.all([
      fetchShelfData("currently-reading"),
      fetchShelfData("read"),
    ]);
    return [
      ...(currentlyReadShelf.items.length
        ? {
            title: t("currentlyReading"),
            shelfUrl: "currently-reading",
            items: currentlyReadShelf.items,
          }
        : {}),
      ...(readShelf.items.length
        ? { title: t("read"), shelfUrl: "read", items: readShelf.items }
        : {}),
      ...shelvesData,
    ];
  });
  if(isLoading) return <h1>Loading...</h1>
  console.log('data', data)
  return (
    <Layout>
      <div>
        {[
          { title: t("currentlyReading"), shelfUrl: "currently-reading" },
          { title: t("read"), shelfUrl: "read" },
          ...data.map((shelf) => {
            return {
              title: shelf.name,
              shelfUrl: shelf.id,
              items: shelf.items,
            };
          }),
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
