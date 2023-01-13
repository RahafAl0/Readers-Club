import { useTranslation } from "next-i18next";
import getAxiosInstance from "../../utils/api/getAxiosInstance";
import AddBookCard from "../AddBookCard";
import Dialog from "../Dialog";
import { useState } from "react";
import { useQuery } from "react-query";

const AddNewBook = ({ handleClose, show }) => {
  const { t } = useTranslation("common");

  const [addBookToShelf, setAddBookToShelf] = useState(false);
  const [bookDeatails, setBookDetails] = useState({
    title: "",
    author: "",
    id: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const [shelves, setShelves] = useState([]);
  const [selectedShelf, setSelectedShelf] = useState(0);

  const { isLoading, error, data } = useQuery("mostRecentBooks", () => {
    return getAxiosInstance({ auth: true })
      .get("/books?limit=4")
      .then((res) => res.data);
  });
  console.log('[[[[[', shelves)

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
          <h5>{t("addBook")}</h5>

          <form
            onSubmit={async (event) => {
              event.preventDefault();
              const data = (
                await getAxiosInstance({ auth: false }).get(
                  `/books/search?title=${searchTerm}&limit=4`
                )
              ).data;
              setSearchItems(data.items);
            }}
            className="m-10"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder={t("search")}
              aria-label="Search"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </form>
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
              {!shelves.length ? (
                <span>Loading.../ Create Shelves to Manage Books</span>
              ) : (
                shelves.map((shelf) => {
                  return (
                    <button
                      onClick={async (event) => {
                        const shelfId = await getAxiosInstance({
                          auth: true,
                        }).post(`user/shelves/${shelf.id}/books`, {
                          user_book_id: bookDeatails.id,
                        });
                        setSelectedShelf(shelfId);
                      }}
                      type="button"
                      className={`m-2 border border-success btn btn-outline-success${
                        selectedShelf == shelf.id ? " bg-info" : ""
                      }`}
                    >
                      {shelf.name}
                    </button>
                  );
                })
              )}
            </div>
          </>
        ) : (
          <>
            <div className="row m-2 p-2">
              {!searchItems.length ? (
                <span>Search for books to add</span>
              ) : (
                searchItems.map((item) => {
                  return (
                    <AddBookCard
                      key={item.id}
                      title={item.title}
                      url="/book/1984"
                      author={item.authors}
                      id={item.id}
                      handleAddBookToShelf={async (book) => {
                        const data = (
                          await getAxiosInstance({ auth: true }).get(
                            "user/shelves"
                          )
                        ).data;
                        setShelves(data.slice(0, 4));
                        handleAddBookToShelf(book);
                      }}
                    />
                  );
                })
              )}
            </div>
          </>
        )
      }
      footer={
        addBookToShelf ? (
          <>
            <div className="card-footer m-2 d-flex align-items-center justify-content-between">
              <span
                className="text-muted padding-left"
                role="button"
                onClick={() => {
                  setAddBookToShelf(false);
                }}
              >
                {" "}
                &lt; {t("back")}
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
                  {t("cancel")}
                </button>
                <button
                  className="btn btn-primary me-md-3 float-end"
                  type="button"
                >
                  {t("add")}
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
              {t("cancel")}
            </button>
          </>
        )
      }
    />
  );
};

export default AddNewBook;
