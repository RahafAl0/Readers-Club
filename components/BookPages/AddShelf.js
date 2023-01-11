import getAxiosInstance from "../../utils/api/getAxiosInstance";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import Dialog from "../Dialog";

const AddShelf = ({ handleClose, show }) => {
  const { t } = useTranslation("common");

  const [shelfName, setShelfName] = useState("");

  const handleCloseAddShelf = () => {
    setShelfName("");
    handleClose();
  };

  return (
    <Dialog
      show={show}
      handleClose={handleCloseAddShelf}
      header={
        <>
          <h5 className="p-5 text-center">{t("addShelf")}</h5>
        </>
      }
      body={
        <>
          <input
            className=" m-auto w-375px form-control"
            type="text"
            placeholder={t("addShelf")}
            aria-label="default input example"
            value={shelfName}
            onChange={(event) => {
              setShelfName(event.target.value);
            }}
          />
        </>
      }
      footer={
        <>
          <button
            className="btn btn-primary me-md-10 float-end"
            type="button"
            disabled={!shelfName.length}
            onClick={async (event) => {
              event.preventDefault();
              await getAxiosInstance({ auth: true }).post(
                "/user/shelves",
                { name: shelfName },
                { headers: { "Content-Type": "application/json" } }
              );
              handleCloseAddShelf();
            }}
          >
            {t("add")}
          </button>
        </>
      }
    />
  );
};

export default AddShelf;
