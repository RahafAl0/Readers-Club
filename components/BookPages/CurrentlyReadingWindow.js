import BookCard from '../Card';

const CurrentlyReadingWindow = () => {
  return(
    <div>

      <div className="card m-auto justify-content w-1000px h-600px border border-primary ">
        <div className="card-body"> 
          <div className='justify-content-between'>
            <h5 className="card-header p-2 m-2">Currently Reading</h5>
            <div className='m-10'>
              <input class="form-control me-2" type="search" placeholder="Goerge Orewell" aria-label="Search"/>
            </div>
          </div>
          <div className='row m-2 p-2'>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
          </div>
          <div className='card-footer m-10'>

          </div>
        </div>
      </div>
    </div>
  )
}


export default CurrentlyReadingWindow;


{/* <div className='row m-5 p-5'>
            <div className="card border w-200px h-300px">
            <div className="p-5">
              <img className=" m-auto d-block w-100px h-150px"
                   src={faker.image.cats()} alt="avatar" width="100"
                   height="100" />
            </div>
            <div className="card-body">
              <h5 className="text">{faker.animal.cat()}</h5>
              <p className="text">{faker.name.fullName()}</p>
              <div class="progress">
              <div class="progress-bar w-25" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                25%
              </div>
              Rating {Math.floor(Math.random() * 5)}% 
            </div>
            </div>
            <div className="card border w-200px h-300px">
            <div className="p-5">
              <img className=" m-auto d-block w-100px h-150px"
                   src={faker.image.cats()} alt="avatar" width="100"
                   height="100" />
            </div>
            <div className="card-body">
              <h5 className="text">{faker.animal.cat()}</h5>
              <p className="text">{faker.name.fullName()}</p>
              <div class="progress">
              <div class="progress-bar w-50" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                50%
              </div>
              Rating {Math.floor(Math.random() * 5)}% 
            </div>
            </div>
            <div className="card border w-200px h-300px">
            <div className="p-5">
              <img className=" m-auto d-block w-100px h-150px"
                   src={faker.image.cats()} alt="avatar" width="100"
                   height="100" />
            </div>
            <div className="card-body">
              <h5 className="text">{faker.animal.cat()}</h5>
              <p className="text">{faker.name.fullName()}</p>
              <div class="progress">
              <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                75%
              </div>
              Rating {Math.floor(Math.random() * 5)}% 
            </div>
            </div>
            <div className="card border w-200px h-300px">
            <div className="p-5">
              <img className=" m-auto d-block w-100px h-150px"
                   src={faker.image.cats()} alt="avatar" width="100"
                   height="100" />
            </div>
            <div className="card-body">
              <h5 className="text">{faker.animal.cat()}</h5>
              <p className="text">{faker.name.fullName()}</p>
              <div class="progress">
              <div class="progress-bar w-100" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                100%
              </div>
              Rating {Math.floor(Math.random() * 5)}% 
            </div>
            </div>
          </div> */}