
const BookCard = () => {
  return (
    <div className='col-md-2 col-xxl-4 col-lg-12  w-175px h-245px  shadow-lg p-6 mb-5 bg-white rounded '>
      <div className='card card-custom shadow-none'>
          <div className='card-body p-0 m-3'>
            <div className='overlay text-center overflow-hidden '>
              <img src='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327144697l/3744438.jpg' alt className=' w-75px'/>
            </div>  
          </div>
          <div className=' mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column'>
            <a className='fs-4 fw-bolder text-gray-800 text-hover-primary mb-1' href="/start-react-pro/shop/product/1">1984</a>
            <span className='fs-6'>By George Orewell</span>
            
          </div>
      </div>
    </div>
  )



















  // return(
  //   <div className='row g-5 g-xxl-8'>
  //     <div className='col-md-4 col-xxl-4 col-lg-12'>
  //       <div className='card card-custom shadow-none'>
  //         <div className='card-body p-0'>
  //           <div className='overlay rounded overflow-hidden'>
  //             <div className='overlay-wrapper rounded bg-light   text-center'>
  //               <img src='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327144697l/3744438.jpg' alt className='mw-100 w-75px'/>
  //             </div>
  //             <div className='text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column'>
  //               <a className='fs-4 fw-bolder text-gray-800 text-hover-primary mb-1' href="/start-react-pro/shop/product/1">1984</a>
  //               <span className='fs-6'>By George Orewell</span>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>




    // <div className="card border w-175px h-275px m-auto">
    //   <div>
    //     <img className=" m-auto d-block w-75px h-125px"
    //          src={faker.image.cats()} alt="avatar" width="75"
    //          height="100" />
    //   </div>
    //   <div className="card-body">
    //     <h5 className="text">1984</h5>
    //     <p className="text">By George Orewell</p>
    //     <div class="progress">
    //       <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    //       25%
    //     </div>
    //     Rating {Math.floor(Math.random() * 5)}% 
    //   </div>
    //   </div>
  // )
}

export default BookCard;