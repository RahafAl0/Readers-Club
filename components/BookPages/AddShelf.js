import Dialog from "../Dialog";

const AddShelf = ({ handleClose, show }) => {
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
          />
        </>
      }
      footer={
        <>
          <button className="btn btn-primary me-md-10 float-end" type="button">
            Add
          </button>
        </>
      }
    />
  );
};

export default AddShelf;
