import { useRef } from "react";
import getAxiosInstance from '../../utils/api/getAxiosInstance'
import Dialog from "../Dialog";


const ProfilePictureEdit = ({ handleClose, show }) => {
  const inputImageRef = useRef();

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
           
            <div class="mb-3">
              <input class="form-control" type="file" accept="image/*" ref={inputImageRef} id="formFile"/>
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
              onClick={() => {
                // uploadImage()
                console.log('rashed', inputImageRef.current.files);
                const imageFile = inputImageRef.current.files[0];
                const data = new FormData()
                data.append('image', imageFile, imageFile.name);
                console.log('ll', data)
                getAxiosInstance({ auth: true }).post('/user/profile/image', data, {
                  headers: {
                    'Content-Type': `multipart/form-data`
                  }
                })

                handleClose();
              }}
            >
              Save
            </button>
          </div>
        </>
      }
    />
  );
};

export default ProfilePictureEdit;
