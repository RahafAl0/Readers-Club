import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getUser } from "../utils/api/auth";
import ProfilePictureEdit from "./BookPages/ProfilePicture";
import AddShelf from "./BookPages/AddShelf";
import AddNewBook from "./BookPages/AddNewBook";
import { fetchShelfData } from "../utils/api/shelf";
import { getBooks } from "../utils/api/books";

const Sidebar = (props) => {
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [showAddShelfDialog, setShowAddShelfDialog] = useState(false);
  const [showAddBookDialog, setShowAddBookDialog] = useState(false);

  const { isLoading, error, data } = useQuery("userInfo", async () => {
    const userProfile = await getUser();
    const [readShelf, currentlyReadShelf, allBooks] = await Promise.all([
      fetchShelfData("read"),
      fetchShelfData("currently-reading"),
      getBooks({limit: 1})
    ]);

  const statusBoxItems = [
    { title: "All", count: allBooks.count, link: "/" },
    { title: "Read", count: readShelf.count, link: "/shelf/read" },
    {
      title: "Currently Reading",
      count: currentlyReadShelf.count,
      link: "/shelf/currently-reading",
    },
    ];

    return {userProfile, statusBoxItems};
  });

  const router = useRouter();

  const {userProfile, statusBoxItems = []} = data || {}; 

  return (
    <>
      <div className="d-flex flex-column sidebar-body bg-info">
        <div className="position-relative">
          <span className="position-absolute">X</span>
          <img
            className="h-150px w-150px rounded-circle mx-auto d-block m-10"
            // src={isLoading ? '/avatar.jpg' : userProfile.image}
            src="/avatar.jpg"
            role="button"
            onClick={() => {
              setShowImageDialog(true);
            }}
          />
        </div>
        <div className="text-center m-1">
          <h4>{isLoading ? "welcome" : userProfile.user.username}</h4>
        </div>
        <div>
          <div className="row row-cols-2 px-xl-12 sidebar-toolbar">
            {[
             ...statusBoxItems,
              { title: "Want to Read", count: 6, link: "/shelf/want-to-read" },
            ].map((item, index) => (
              <div key={index} className="col p-3 ">
                <a
                  href={item.link}
                  className="btn p-5 w-100 text-start btn-active-primary h-100px"
                >
                  <span className="text-white fw-bolder fs-1 d-block pb-1">
                    {item.count}
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
          <button
            className="btn btn-danger"
            onClick={() => {
              localStorage.setItem("user", JSON.stringify({}));
              router.push("/auth/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
      <ProfilePictureEdit
        show={showImageDialog}
        currentPicture={data?.image}
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
