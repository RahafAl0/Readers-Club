const AddBookToShelf = () => {
  return(
    <div>
      <div className="card m-auto w-50 border border-primary ">
        <div className="card-body"> 
          <div className='justify-content-between'>
            <h5 className="card-title">Add Book</h5>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <h5>1984</h5>
            <p>By Goerge Orewell</p>
            <div >
              <button type="button" className="m-2 border border-primary btn btn-outline-primary">Shelf1</button>
              <button type="button" className="m-2 border border-primary btn btn-outline-primary">Shelf2</button>
              <button type="button" className="m-2 border border-primary btn btn-outline-primary">Shelf3</button>
              <button type="button" className="m-2 border border-primary btn btn-outline-primary">Shelf4</button>
            </div>
            <div>
              <button class="btn btn-primary me-md-10 float-end" type="button">Add</button>
              <button class="btn btn-primary me-md-10 float-end" type="button">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBookToShelf;