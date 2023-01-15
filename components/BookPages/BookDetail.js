import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { useTranslation } from 'next-i18next'
import getAxiosInstance from "../../utils/api/getAxiosInstance";
import Layout from "../Layout";

const BookDetail = () => {

  const { t } = useTranslation('common');
  

  const {query: {bookId} } = useRouter()

  const { isLoading, error, data } = useQuery("bookDetails", () => {
    return getAxiosInstance({ auth: true })
      .get(`/books/${bookId}`)
      .then((res) => res.data);
  });

  return (
    <Layout>
    
      {
        isLoading ? <h1>Loading your book detail</h1> : <div className="card border mb-3 w-700px h-120px m-auto">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327144697l/3744438.jpg"
              className="img-fluid rounded-start"
              alt="..."
              style={{ height: "450px" }}
            />
          </div>
          <div className="col-md-6 ">
            <div className="card-header">
              <p className="fw-bold fs-1">{data.title}</p>
              <p className="fs-1 fw-bold">{data.authors}</p>
            </div>
            <div className="card-body">
              <p className="card-text">
                {data.description}
              </p>
              <div className="card-footer">
                <p>{data.pages} pages</p>
                <p>Published {data.publication_date} by ({data.publisher})</p>
              </div>
            </div>
          </div>
          <div className="col-md-2" >
          <button type="button" className="btn btn-primary">
          {t("markAsRead")}
        </button>
        <button type="button" className="btn btn-primary">
          {t("marsAsDone")}
        </button>
        <button type="button" className="btn btn-primary">
          {t("addToShelf")}
        </button>
          </div>

        </div>
      </div>
      }
    </Layout>
  );
};

export default BookDetail;
