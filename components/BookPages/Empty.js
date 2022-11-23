import BookCard from "../Card";

const Empty = () => {
  return(
    <div>
    
      <div className="card m-auto justify-content w-1000px h-500px border border-primary ">
        <div className="card-body"> 
          <div className='justify-content-between'>
          <button type="button" className="btn-close p-5" aria-label="Close"></button>
            <div className='m-5'>
              <input class="form-control me-2" type="search" placeholder="Goerge Orewell" aria-label="Search"/>
            </div>
          </div>
          <div className='row m-1 p-2'>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
          </div>
        </div>
       </div>
    </div>
      )
}

export default Empty;