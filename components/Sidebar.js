import { faker } from '@faker-js/faker';
import React, { useState } from 'react';
import Dialog from './Dialog';
import ProfilePicture from './BookPages/ProfilePicture';
import AddShelf from './BookPages/AddShelf';
import AddNewBook from './BookPages/AddNewBook';



const Sidebar = (props) => {
  const [showImageDialog, setShowImageDialog] = useState(false) 
  const [showAddShelfDialog, setShowAddShelfDialog] = useState(false)
  const [showAddBookDialog, setShowAddBookDialog] = useState(false)

  return(
    <>
      <div className="d-flex flex-column sidebar-body bg-info">
        <div role="button" onClick={() => {setShowImageDialog(true)}}>
          <img className="h-150px w-150px rounded-circle mx-auto d-block m-10"
              src={faker.image.cats()} 
          />
        </div>
        <div className="text-center m-1">
          <h4>Rahaf Almusleh</h4>
        </div>
        <div>
          <div className="row row-cols-2 px-xl-12 sidebar-toolbar">
            {[{title: 'All', status: 129, link: '/'}, {title:'Read', status: 119, link: '/shelf/read'}, {title:'Currently Reading', status: 4, link: '/shelf/currently-reading'}, {title:'Want to Read', status: 6, link: '/shelf/want-to-read'}].map((item, index) => (
              <div className='col p-3 '>
              <a href={item.link} className="btn p-5 w-100 text-start btn-active-primary h-100px">
                <span className='text-white fw-bolder fs-1 d-block pb-1'>{item.status}</span>
                <span className="fw-bold fs-8">{item.title}</span>
              </a>
            </div>
            ))}
          </div>     
        </div>
        <div className='row w-125px h-50px m-auto'>
          <button className="btn text-primary btn-info m-2" type="button" onClick={() => {setShowAddShelfDialog(true)}}>Add Shelf</button>
          <button className="btn btn-primary m-2" type="button" onClick={() => {setShowAddBookDialog(true)}}>Add book</button>
        </div>
      </div>
    <Dialog show={showImageDialog} handleClose={() => setShowImageDialog(false)} content={
        <ProfilePicture handleClose={() => setShowImageDialog(false)}/>
      }/>
     <Dialog show={showAddShelfDialog} handleClose={() => setShowAddShelfDialog(false)} content={
        <AddShelf handleClose={() => setShowAddShelfDialog(false)}/>
      }/>
      <Dialog show={showAddBookDialog} handleClose={() => setShowAddBookDialog(false)} content={
        <AddNewBook handleClose={() => setShowAddBookDialog(false)}/>
      }/>
    </>

  )
}

export default Sidebar;
