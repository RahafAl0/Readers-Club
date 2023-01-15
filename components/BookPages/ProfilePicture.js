import { useRef } from "react";
import { useTranslation } from "next-i18next";
import { useQuery } from "react-query";
import { API_URL } from "../../utils/api/getAxiosInstance";
import { getUser } from "../../utils/api/auth";
import getAxiosInstance from "../../utils/api/getAxiosInstance";
import Dialog from "../Dialog";

const ProfilePictureEdit = ({ handleClose, show }) => {
  const { t } = useTranslation("common");

  const { isLoading, error, data } = useQuery(
    "userImage",
    async () => await getUser()
  );

  const inputImageRef = useRef();

  return (
    <Dialog
      show={show}
      handleClose={handleClose}
      header={
        <>
          <h5 className="text-center ">{t("profilePicture")}</h5>
        </>
      }
      body={
        isLoading ? <h1>Loading</h1> : 
        <>
          <p className="text-center">
            {t("addAnicephotoOfYourselfForYourProfile")}
          </p>
          <div className="p-5">
            <img
              className="rounded-circle mx-auto d-block "
              src={
                !data.image ? "/avatar.jpg" : "http://localhost:8000" + data.image
              }
              alt="avatar"
              width="100"
              height="100"
            />
          </div>
          <div className="input-group mb-2">
            <div class="mb-3">
              <input
                class="form-control"
                type="file"
                accept="image/*"
                ref={inputImageRef}
                id="formFile"
              />
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
                const imageFile = inputImageRef.current.files[0];
                const data = new FormData();
                data.append("image", imageFile, imageFile.name);
                getAxiosInstance({ auth: true }).post(
                  "/user/profile/image",
                  data,
                  {
                    headers: {
                      "Content-Type": `multipart/form-data`,
                    },
                  }
                );

                handleClose();
              }}
            >
              {t("save")}
            </button>
          </div>
        </>
      }
    />
  );
};

export default ProfilePictureEdit;
