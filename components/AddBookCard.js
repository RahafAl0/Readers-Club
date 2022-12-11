import React, { useState } from "react";
import AddBookToShelf from "./BookPages/AddBookToShelf";

const AddBookCard = ({ title, url, author, handleAddBookToShelf }) => {
  return (
    <div className="col-md-2 col-xxl-4 col-lg-12  w-175px h-245px  shadow-lg p-6 mb-5 bg-white rounded ">
      <div className="card card-custom shadow-none">
        <div className="card-body p-0 m-3">
          <div className="overlay text-center overflow-hidden ">
            <img
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327144697l/3744438.jpg"
              alt
              className=" w-75px"
            />
          </div>
          <img src="/plus.svg" />
        </div>
        <div className=" mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
          <span className="fs-4 fw-bolder text-gray-800 text-hover-primary mb-1">
            {title}
          </span>
          <span className="fs-6">By {author}</span>
          <button onClick={() => handleAddBookToShelf({ title, author })}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBookCard;

// addBookToShelf ? <AddBookToShelf /> :
