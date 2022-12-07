import ShelfScreen from "../../../components/ShelfNamePages/ShelfScreen";
import { useRouter } from "next/router";

export default function ShelfName (props) {
  const router = useRouter()
  function capitalize(str){ 
    return  str[0].toUpperCase() + str.substr(1);
  }
  console.log(router.query.shelfName)
  if(props.shelf == 'Not found') return <h1>Page Not Found!</h1> 
  return (
    
      <ShelfScreen shelfName={capitalize(props.shelf)}/>

    
  )
}

export const getServerSideProps = async (context) => {
  const {query} = context;

  const shelfs = ['read', 'currently-reading', 'want-to-read', 'to-read']
  const shelfIndex = shelfs.findIndex((item) => {
    return item == query.shelfName.toLowerCase()
  })
  const shelf = shelfIndex == -1 ? null : query.shelfName;

  if (!shelf) {
    return {notFound : true} 
  }

  return {props: {shelf: shelf.replace("-", " ") }}
}