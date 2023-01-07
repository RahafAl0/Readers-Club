import ShelfScreen from "../../../components/ShelfNamePages/ShelfScreen";
import { useRouter } from "next/router";

export default function ShelfName(props) {
  const router = useRouter();
  function capitalize(str) {
    return str[0].toUpperCase() + str.substr(1);
  }
  console.log(router.query.shelfName);
  if (props.shelf == "Not found") return <h1>Page Not Found!</h1>;
  return (
    <ShelfScreen
      shelf={{ ...props.shelf, labelEn: capitalize(props.shelf.labelEn) }}
    />
  );
}

export const getServerSideProps = async (context) => {
  const { query } = context;
  //ToDo
  const shelfs = ["read", "currently-reading", 1, 2];
  const shelfIndex = shelfs.findIndex((item) => {
    return item == query.shelfName.toLowerCase();
  });
  const shelf = shelfIndex == -1 ? null : query.shelfName;

  if (!shelf) {
    return { notFound: true };
  }

  // TODO: move fetch shelf logic to this file, don't forget id for shelves
  return { props: { shelf: { url: shelf, labelEn: shelf.replace("-", " ") } } };
};
