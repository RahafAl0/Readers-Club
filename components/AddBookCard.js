import { useTranslation } from "next-i18next";

const AddBookCard = ({ title, url, author, handleAddBookToShelf, id }) => {
  const { t } = useTranslation("common");

  return (
    <div className="col-md-2 col-xxl-4 col-lg-12  w-175px h-245px  shadow-lg p-6 mb-5 bg-white rounded ">
      <div className="card card-custom shadow-none">
        <div className="card-body p-0 m-3">
          <div className="overlay text-center overflow-hidden ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/P_literature.svg/800px-P_literature.svg.png"
              className=" w-75px"
            />
          </div>
          <img src="/plus.svg" />
        </div>
        <div className=" mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
          <span className="fs-4 fw-bolder text-gray-800 text-hover-primary mb-1 text-truncate cursor-pointer" title={title}>
            {title}
          </span>
          <span className="fs-6 text-truncate" title={author}>{t('by')} {author}</span>
          <button className="btn btn-primary me-md-2 float-end" onClick={() => handleAddBookToShelf({ title, author, id })}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBookCard;

// addBookToShelf ? <AddBookToShelf /> :
