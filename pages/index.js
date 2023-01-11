import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import BookShelfRow from "../components/BookShelfRow";
import Layout from "../components/Layout";

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <div>
        {[
          { title: t("currentlyReading"), shelfUrl: "currently-reading" },
          { title: t("read"), shelfUrl: "read" },
          { title: "To Read", shelfUrl: "to-read" },
          { title: "Want to read", shelfUrl: "want-to-read" },
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
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}