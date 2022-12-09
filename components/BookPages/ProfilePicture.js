import Dialog from "../Dialog";

const ProfilePicture = ({handleClose, show}) => {
  return (
    <Dialog
      show={show}
      handleClose={handleClose}
      header={
        <>
          <h5 className="text-center ">Profile Picture</h5>
          
        </>
      }
      body={
        <>
          <p className="text-center">
            Add a nice photo of yourself for your profile.
          </p>
          <div className="p-5">
            <img
              className="rounded-circle mx-auto d-block "
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
              alt="avatar"
              width="100"
              height="100"
            />
          </div>
          <div className="input-group mb-2">
            <input
              type="text"
              class="form-control"
              placeholder="no file selected"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-dark" type="button">
                Browse
              </button>
            </div>
          </div>
        </>
      }
      footer={
        <>
          <div className="m-auto p-2">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleClose}
            >
              Save
            </button>
          </div>
        </>
      }
    />
  );
  // return (
  //   <div className="border-primary w-350px h-445px m-auto">
  //     {/* <button type="button" className="btn-close p-5" aria-label="Close" onClick={handleClose}></button> */}
  //     <div className="card-body">
  //       <h5 className="text-center ">Profile Picture</h5>
  //       <p className="text-center">
  //         Add a nice photo of yourself for your profile.
  //       </p>
  //       <div className="p-5">
  //         <img
  //           className="rounded-circle mx-auto d-block "
  //           src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
  //           alt="avatar"
  //           width="100"
  //           height="100"
  //         />
  //       </div>
  //       <div class="input-group mb-2">
  //         <input
  //           type="text"
  //           class="form-control"
  //           placeholder="no file selected"
  //           aria-label="Recipient's username"
  //           aria-describedby="basic-addon2"
  //         />
  //         <div class="input-group-append">
  //           <button className="btn btn-dark" type="button">
  //             Browse
  //           </button>
  //         </div>
  //       </div>
  //       <div className="text-center p-2">
  //         <button
  //           className="btn btn-primary"
  //           type="button"
  //           onClick={handleClose}
  //         >
  //           Save
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default ProfilePicture;
