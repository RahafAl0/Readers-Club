import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ShelfScreen from "../../../components/ShelfNamePages/ShelfScreen";

export default function ShelfName(props) {
  return <ShelfScreen />;
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
