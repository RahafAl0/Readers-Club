import AddBookCard from "../AddBookCard";
import Dialog from "../Dialog";
import { useState, useEffect } from "react";

const AddNewBook = ({ handleClose, show }) => {
  const [addBookToShelf, setAddBookToShelf] = useState(false);
  const [bookDeatails, setBookDetails] = useState({title : "", author : ""});
  useEffect(() => {
    return function cleanup() {
      setAddBookToShelf(false)
      setBookDetails({title : "", author : ""})
    } 
  })

  function handleAddBookToShelf(book) {
    setAddBookToShelf(true);
    setBookDetails(book);
  }

  return (
    <Dialog
      show={show}
      handleClose={handleClose}
      header={
        <>
            <h5>Add book</h5>
            
            <div className="m-10">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Goerge Orewell"
                aria-label="Search"
              />
            </div>
          
        </>
      }
      body={
        addBookToShelf ? (
          <>
            <div className="m-10">
              <h5>{bookDeatails.title}</h5>
              <p>By {bookDeatails.author}</p>
            </div>
            <div className=" h-50px">
              <button
                type="button"
                className="m-2 border border-success btn btn-outline-success"
              >
                Shelf1
              </button>
              <button
                type="button"
                className="m-2 border border-success btn btn-outline-success"
              >
                Shelf2
              </button>
              <button
                type="button"
                className="m-2 border border-success btn btn-outline-success"
              >
                Shelf3
              </button>
              <button
                type="button"
                className="m-2 border border-success btn btn-outline-success"
              >
                Shelf4
              </button>
            </div>
          </> 

        ) : (
          <>
            <div className="row m-2 p-2">
              <AddBookCard
                title="1984"
                url="/book/1984"
                author="Goerge Orewell"
                handleAddBookToShelf={handleAddBookToShelf}
              />
              <AddBookCard
                title="1984"
                url="/book/1984"
                author="Goerge Orewell"
                handleAddBookToShelf={handleAddBookToShelf}
              />
              <AddBookCard
                title="1984"
                url="/book/1984"
                author="Goerge Orewell"
                handleAddBookToShelf={handleAddBookToShelf}
              />
              <AddBookCard
                title="1984"
                url="/book/1984"
                author="Goerge Orewell"
                handleAddBookToShelf={handleAddBookToShelf}
              />
            </div>
          </>
        )
        
      }

      footer={addBookToShelf ? <>
       <div className="card-footer m-2 d-flex align-items-center justify-content-between">
              <span className="text-muted" role="button" > &lt; back</span>
              <div>
                <button className="btn btn-dark me-md-3 float-end" type="button" onClick={handleClose}>Cancel</button>
                <button className="btn btn-primary me-md-3 float-end" type="button">Add</button>
              </div>
            </div>
      </>
      :
        <>
          <button
            class="btn btn-dark me-md-3 float-end"
            type="button"
            onClick={handleClose}
          >
            Cancel
          </button>

        </>
      }
    />
  );
  // return (
  //   <div>
  //     <div className="card m-auto justify-content w-1000px h-600px border border-primary ">
  //       <div className="card-body">
  //         <div className="justify-content-between">
  //           <h5 className="card-header p-2 m-2">Add book</h5>
  //           <div className="m-10">
  //             <input
  //               class="form-control me-2"
  //               type="search"
  //               placeholder="Goerge Orewell"
  //               aria-label="Search"
  //             />
  //           </div>
  //         </div>
  //         <div className="row m-2 p-2">
  //           <BookCard />
  //           <BookCard />
  //           <BookCard />
  //           <BookCard />
  //         </div>
  //         <div className="card-footer m-10"></div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default AddNewBook;
