import { useTranslation } from "next-i18next";

const Review = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="text-center">{t("review")}</div>
      <div className="card m-auto w-50 border border-primary ">
        <div className="card-body">
          <div className="justify-content-between">
            <h5 className="card-title text-center">Card title</h5>
            <p className="card-text text-center ">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
          <img
            className="rounded-circle shadow-1-strong me-3"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
            alt="avatar"
            width="65"
            height="65"
          />
        </div>
      </div>
      <div className="card m-auto w-50 border border-primary">
        <div className="card-body">
          <h5 className="card-title text-center">Card title</h5>
          <p className="card-text text-center">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <img
            className="rounded-circle shadow-1-strong me-3"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
            alt="avatar"
            width="65"
            height="65"
          />
        </div>
      </div>
      <div className="row h-50px w-150px">
        
      </div>
    </div>
  );
};

export default Review;
