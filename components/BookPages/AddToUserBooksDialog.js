import { useState } from "react";
import { useQuery } from "react-query";
import { useTranslation } from "next-i18next";
import getAxiosInstance from "../../utils/api/getAxiosInstance";
import Dialog from "../Dialog";

const AddToUserBooksDialog = ({ book, show, handleClose, initialShelves=[] }) => {
  const { t } = useTranslation("common");

  const [selectedShelves, setSelectedShelves] = useState(initialShelves);
  const [addBookLoading, setAddBookLoading] = useState(false);

  const { isLoading, error, data: shelves=[] } = useQuery("userShelves", () => {
    return getAxiosInstance({ auth: true })
      .get("/user/shelves")
      .then((res) => res.data);
  });


  return (
    <Dialog
      show={show}
      handleClose={() => {
        handleClose();
        setSelectedShelves([])
      }}
      header={
        <>
          <h5>{t("addBook")}</h5>
        </>
      }
      body={
        <>
          <div className="m-10">
            <h5>{book.title}</h5>
            <p>By {book.author}</p>
          </div>
          <div className=" h-50px">
            {!shelves.length ? (
              <span>No Shelves To Show .../ Create Shelves to Manage Books</span>
            ) : (
              shelves.map((shelf) => {
                return (
                  <button
                    onClick={(event) => {
                      setSelectedShelves([...selectedShelves, shelf.id]);
                    }}
                    type="button"
                    className={`m-2 border border-success btn btn-outline-success${
                      selectedShelves.includes(shelf.id) ? " bg-success text-dark" : ""
                    }`}
                  >
                    {shelf.name}
                  </button>
                );
              })
            )}
          </div>
        </>
      }
      footer={
        <>
          <div className="card-footer m-2 d-flex align-items-center justify-content-between">
            <div>
              <button
                className="btn btn-dark me-md-3 float-end"
                type="button"
                onClick={() => {
                  handleClose();
                  setSelectedShelves([])
                }}
              >
                {t("cancel")}
              </button>
              <button
                onClick={async () => {
                  setAddBookLoading(true);
                  console.log("book", book)
                  console.log("select", selectedShelves)
                 await getAxiosInstance({
                    auth: true,
                  }).post(`user/books`, {
                    book_id: book.user_book_id,
                    shelves: selectedShelves,
                  });
                  setAddBookLoading(false);
                  handleClose();
                  setSelectedShelves([])
                }}
                disabled={addBookLoading || !selectedShelves.length}
                className="btn btn-primary me-md-3 float-end"
                type="button"
              >
                {t("add")}
              </button>
            </div>
          </div>
        </>
      }
    />
  );
};


export default AddToUserBooksDialog;