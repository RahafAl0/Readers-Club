import { useTranslation } from 'next-i18next'
import BookCard from "./Card";

const BookShelfRow = (props) => {
  const { t } = useTranslation('common');

  return (
      <div>
        <div className="content fs-6 d-flex flex-column-fluid " id="kt_content">
          <div className="container">
            <div className="card">
              <div className="card-body">
                <div className="mb-10">
                  <div className="d-flex justify-content-between align-items-center mb-7">
                    <h2 className="fw-bolder text-dark fs-2 mb-0">
                      {props.title}
                    </h2>
                    <a
                      href={`/shelf/${props.shelfUrl}`}
                      className="btn btn-light-primary btn-sm fw-bolder"
                    >
                     {t('viewMore')}
                    </a>
                  </div>
                  <div className="row g-5 g-xxl-8">
                    {props.items.slice(0,4).map((item , index) => (
                      <BookCard
                        key={index}
                        title={item.title}
                        url={`/books/${item.book_id}`}
                        author={item.authors}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BookShelfRow;
