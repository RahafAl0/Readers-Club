import BookPage from "../../../components/BookPages/BookPage";


export default function Book({todo}) {
  console.log("response at client",todo)  
  return (
      <BookPage />
      
    )}

export const getServerSideProps = async(context) => {
  const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  console.log("response at server =>",response)
  return {
    props : {
      todo : response
    }
  }
}
