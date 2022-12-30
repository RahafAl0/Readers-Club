import { useState } from "react";
import { API_URL } from "../../utils/api";
import Dialog from "../Dialog";

const AddShelf = ({ handleClose, show }) => {
  const [shelfName, setShelfName] = useState("");

  return (
    <Dialog
      show={show}
      handleClose={handleClose}
      header={
        <>
          <h5 className="p-5 text-center">Add Shelf</h5>
        </>
      }
      body={
        <>
          <input
            className=" m-auto w-375px form-control"
            type="text"
            placeholder="Add shelf"
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
            onClick={(event) => {
              event.preventDefault();
              const rawUser = localStorage.getItem("user") || null;
              const user = JSON.parse(rawUser);
              fetch(API_URL + "/api/user/shelves", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Token ${user?.token}`,
                },
                body: JSON.stringify({ name: shelfName }),
              });
              handleClose();
            }}
          >
            Add
          </button>
        </>
      }
    />
  );
};

export default AddShelf;
