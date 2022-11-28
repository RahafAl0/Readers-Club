import BookCard from './Card';

const BookShelfRow = () => {
  return(
    <div>
      <div className='content fs-6 d-flex flex-column-fluid ' id='kt_content'>
        <div className='container'>
          <div className='card'>
            <div className='card-body'>
              <div className='mb-10'>
              <div className='d-flex justify-content-between align-items-center mb-7'>
                <h2 className='fw-bolder text-dark fs-2 mb-0'>Currently Reading</h2>
                <a href='#' className='btn btn-light-primary btn-sm fw-bolder'>View more</a>
              </div>
              <div className='row g-5 g-xxl-8'>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>

        {/* <div className='col-md-4 col-lg-12 col-xxl-4'>
          <div className='card card-custom shadow-none'>
            <div className='card-body p-0'>
              <div className='overlay rounded overflow-hidden'>
                <div className='overlay-wrapper rounded bg-light   text-center'>
                  <img src={faker.image.cats()}  alt className='mw-100 w-200px'/>
                </div>
                <div className='overlay-layer'>
                  <a className='btn fw-bolder btn-sm btn-primary me-2' href="/start-react-pro/shop/product/1">Quick View</a>
                  <a className='btn fw-bolder btn-sm btn-light-primary'>Purchase</a>
                </div>
              </div>
              <div className='text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column'>
                  <a className='fs-4 fw-bolder text-gray-800 text-hover-primary mb-1' href="/start-react-pro/shop/product/1">Smart</a>
                  <span className='fs-6'>Outlines keep poorly thought</span>
                </div>
            </div>
          </div>
        </div> */}
        {/* <div className='col-md-4 col-lg-12 col-xxl-4'>
          <div className='card card-custom shadow-none'>
            <div className='card-body p-0'>
              <div className='overlay rounded overflow-hidden'>
                <div className='overlay-wrapper rounded bg-light   text-center'>
                  <img src={faker.image.cats()}  alt className='mw-100 w-200px'/>
                </div>
                <div className='overlay-layer'>
                  <a className='btn fw-bolder btn-sm btn-primary me-2' href="/start-react-pro/shop/product/1">Quick View</a>
                  <a className='btn fw-bolder btn-sm btn-light-primary'>Purchase</a>
                </div>
              </div>
              <div className='text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column'>
                  <a className='fs-4 fw-bolder text-gray-800 text-hover-primary mb-1' href="/start-react-pro/shop/product/1">Smart</a>
                  <span className='fs-6'>Outlines keep poorly thought</span>
                </div>
            </div>
          </div>
        </div>        */}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className='content fs-6 d-flex flex-column-fluid' id='kt_content'>
        <div className='container'>
          <div className='card'>
            <div className='card-body'>
              <div className='mb-10'>
              <div className='d-flex justify-content-between align-items-center mb-7'>
                <h2 className='fw-bolder text-dark fs-2 mb-0'>Read</h2>
                <a href='#' className='btn btn-light-primary btn-sm fw-bolder'>View more</a>
              </div>
              <div className='row g-5 g-xxl-8'>
                <BookCard />
                <BookCard/>
                <BookCard/>   
              </div>
              </div> 
            </div>    
          </div>
        </div>
      </div>
      <div className='content fs-6 d-flex flex-column-fluid' id='kt_content'>
        <div className='container'>
          <div className='card'>
            <div className='card-body'>
              <div className='mb-10'>
              <div className='d-flex justify-content-between align-items-center mb-7'>
                <h2 className='fw-bolder text-dark fs-2 mb-0'>To Read</h2>
                <a href='#' className='btn btn-light-primary btn-sm fw-bolder'>View more</a>
              </div>
              <div className='row g-5 g-xxl-8'>
                <BookCard />
                <BookCard/>
                <BookCard/>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className='content fs-6 d-flex flex-column-fluid' id='kt_content'>
        <div className='container'>
          <div className='card'>
            <div className='card-body'>
              <div className='mb-10'>
              <div className='d-flex justify-content-between align-items-center mb-7'>
                <h2 className='fw-bolder text-dark fs-2 mb-0'>My Shelf</h2>
                <a href='#' className='btn btn-light-primary btn-sm fw-bolder'>View more</a>
              </div>
              <div className='row g-5 g-xxl-8'>
                <BookCard />
                
                 
              </div>
              </div>      
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookShelfRow;