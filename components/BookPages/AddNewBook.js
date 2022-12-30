import AddBookCard from "../AddBookCard";
import Dialog from "../Dialog";
import { useState } from "react";
import { useQuery } from "react-query";
import { API_URL } from "../../utils/api";

const AddNewBook = ({ handleClose, show }) => {
  const [addBookToShelf, setAddBookToShelf] = useState(false);
  const [bookDeatails, setBookDetails] = useState({ title: "", author: "" });

  const { isLoading, error, data } = useQuery("mostRecentBooks", () => {
    const user = JSON.parse(localStorage.getItem("user") || null);
    return fetch(`${API_URL}/api/books?limit=4`, {
      headers: { Authorization: `Token ${user?.token}` },
    }).then((res) => res.json());
  });

  console.log(data);
  function handleDialogClose() {
    setTimeout(() => {
      setAddBookToShelf(false);
      setBookDetails({ title: "", author: "" });
    }, 200);
  }

  function handleAddBookToShelf(book) {
    setAddBookToShelf(true);
    setBookDetails(book);
  }

  if (isLoading) {
    return (
      <Dialog
        show={show}
        handleClose={() => {
          handleClose();
          handleDialogClose();
        }}
        header={<h5>Add book</h5>}
        body={<h1>Loading...</h1>}
        footer={<></>}
      />
    );
  }

  return (
    <Dialog
      show={show}
      handleClose={() => {
        handleClose();
        handleDialogClose();
      }}
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
              {/* {data.items.map((value) => {
                return (
                  <AddBoo  {data.items.map((value) => {
                return (
                  <AddBookCard
                title= {value.title}
                url= {value.url}
                author= {value.author}
                handleAddBookToShelf={handleAddBookToShelf}
              />
                )
              })}kCard
                title= {value.title}
                url= {value.url}
                author= {value.author}
                handleAddBookToShelf={handleAddBookToShelf}
              />
                )
              })} */}
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
      footer={
        addBookToShelf ? (
          <>
            <div className="card-footer m-2 d-flex align-items-center justify-content-between">
              <span className="text-muted padding-left" role="button">
                {" "}
                &lt; back
              </span>
              <div>
                <button
                  className="btn btn-dark me-md-3 float-end"
                  type="button"
                  onClick={() => {
                    handleClose();
                    handleDialogClose();
                  }}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary me-md-3 float-end"
                  type="button"
                >
                  Add
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <button
              className="btn btn-dark me-md-3 float-end"
              type="button"
              onClick={() => {
                handleClose();
                handleDialogClose();
              }}
            >
              Cancel
            </button>
          </>
        )
      }
    />
  );
};

export default AddNewBook;
