import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SearchScreen from "../../components/SearchScreen";

export default function SearchPage(props) {
  return <SearchScreen/>;
}

export const getServerSideProps = async ({ locale }) => {
  //ToDo

  // TODO: move fetch shelf logic to this file, don't forget id for shelves
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
