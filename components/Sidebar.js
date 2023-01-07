import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getUser } from "../utils/api/auth";
import ProfilePicture from "./BookPages/ProfilePicture";
import AddShelf from "./BookPages/AddShelf";
import AddNewBook from "./BookPages/AddNewBook";

const Sidebar = (props) => {
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [showAddShelfDialog, setShowAddShelfDialog] = useState(false);
  const [showAddBookDialog, setShowAddBookDialog] = useState(false);

  const { isLoading, error, data } =  useQuery("userProfile", async () => {
    return (await getUser());
  });

  const router = useRouter()

  return (
    <>
      <div className="d-flex flex-column sidebar-body bg-info">
        <div
          role="button"
          onClick={() => {
            setShowImageDialog(true);
          }}
        >
          <img
            className="h-150px w-150px rounded-circle mx-auto d-block m-10"
            src={isLoading ? '/avatar.jpg' : data.image}
          />
        </div>
        <div className="text-center m-1">
          <h4>{isLoading ? 'welcome' : data.user.username}</h4>
        </div>
        <div>
          <div className="row row-cols-2 px-xl-12 sidebar-toolbar">
            {[
              { title: "All", status: 129, link: "/" },
              { title: "Read", status: 119, link: "/shelf/read" },
              {
                title: "Currently Reading",
                status: 4,
                link: "/shelf/currently-reading",
              },
              { title: "Want to Read", status: 6, link: "/shelf/want-to-read" },
            ].map((item, index) => (
              <div key={index} className="col p-3 ">
                <a
                  href={item.link}
                  className="btn p-5 w-100 text-start btn-active-primary h-100px"
                >
                  <span className="text-white fw-bolder fs-1 d-block pb-1">
                    {item.status}
                  </span>
                  <span className="fw-bold fs-8">{item.title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="row w-125px h-50px m-auto">
          <button
            className="btn text-primary btn-info m-2"
            type="button"
            onClick={() => {
              setShowAddShelfDialog(true);
            }}
          >
            Add Shelf
          </button>
          <button
            className="btn btn-primary m-2"
            type="button"
            onClick={() => {
              setShowAddBookDialog(true);
            }}
          >
            Add book
          </button>
        <button className="btn btn-danger" onClick={() => {
          localStorage.setItem('user', JSON.stringify({}))
          router.push('/auth/login')
        }}>Logout</button>
        </div>
      </div>
      <ProfilePicture
        show={showImageDialog}
        handleClose={() => setShowImageDialog(false)}
      />
      <AddShelf
        show={showAddShelfDialog}
        handleClose={() => setShowAddShelfDialog(false)}
      />
      <AddNewBook
        show={showAddBookDialog}
        handleClose={() => setShowAddBookDialog(false)}
        
      />
    </>
  );
};

export default Sidebar;
