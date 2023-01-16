import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { useTranslation } from "next-i18next";
import getAxiosInstance from "../../utils/api/getAxiosInstance";
import Layout from "../Layout";
import { useState } from "react";
import AddToUserBooksDialog from "./AddToUserBooksDialog";

const BookDetail = () => {
  const { t } = useTranslation("common");

  const [showAddBookDialog, setShowAddBookDialog] = useState(false);
  const [showAddToShelfDialog, setShowAddToShelfDialog] = useState(false)

  const {
    query: { bookId },
  } = useRouter();

  const { isLoading, error, data } = useQuery("bookDetails", async () => {
    const book = await getAxiosInstance({ auth: true })
      .get(`/books/${bookId}`)
      .then((res) => res.data);

    let userBook = null;

    if (book.user_book_id) {
      userBook = await getAxiosInstance({ auth: true })
        .get(`/user/books/${book.user_book_id}`)
        .then((res) => res.data);
      return { book, userBook };
    } else return { book, userBook: null };
  });

  const { book, userBook } = data || {};

  const renderBookButtons = () => {
    const { is_currently_reading } = userBook || {};
    return (
      <div className="d-flex justify-content-center mt-20 gap-5">
        {!userBook ? (
          null
        ) : (
          <>
            {!is_currently_reading ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={async (event) => {
                  await getAxiosInstance({ auth: true }).put(
                    `/user/currently-reading`,
                    { user_book_id: userBook.id, status: true }
                  );
                  alert("done add book to currently reading books");
                }}
              >
                {t("markAsCurrentlyReading")}
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={async (event) => {
                  await getAxiosInstance({ auth: true }).put(
                    `/user/books/${book.user_book_id}/done`
                  );
                  alert("done add book to finished books");
                }}
              >
                {t("markAsRead")}
              </button>
            )}

            <button
              type="button"
              className="btn btn-primary"
              onClick={async (event) => {
                await getAxiosInstance({ auth: true }).delete(
                  `/user/books/${book.user_book_id}`
                );
                alert(t("done add book to finished books"));
              }}
            >
              {t("removeBook")}
            </button>
          </>
        )}
        <button type="button" className="btn btn-primary" onClick={() => {
          setShowAddToShelfDialog(true)
        }}>
          {userBook ?  t("addToShelf") :t('addBook')}
        </button>
        <AddToUserBooksDialog
              initialShelves={ userBook ? userBook.shelves : []}
              show={showAddToShelfDialog}
              book={book || {}}
              handleClose={() => {
                setShowAddToShelfDialog(false);
              }}
            />
      </div>
    );
  };

  return (
    <Layout>
      {isLoading ? (
        <h1>Loading book details</h1>
      ) : (
        <div className="card border mb-3 w-700px h-120px m-auto">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={book.image ?  'http://localhost:8000' + book.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/P_literature.svg/800px-P_literature.svg.png"}
                className="img-fluid rounded-start"
                alt={book.title}
                style={{ height: "450px" }}
              />
            </div>
            <div className="col-md-6 ">
              <div className="card-header">
                <p className="fw-bold fs-1">{book.title}</p>
                <p className="fs-1 fw-bold">{book.authors}</p>
              </div>
              <div className="card-body">
                <p className="card-text">{book.description}</p>
                <div className="card-footer">
                  <p>{book.pages} pages</p>
                  <p>
                    Published {book.publication_date} by ({book.publisher})
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      )}
      {isLoading ?  null : renderBookButtons()}
    </Layout>
  );
};

export default BookDetail;
