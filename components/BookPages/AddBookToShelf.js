const AddBookToShelf = () => {
  return(
    <div>
      <div className="card m-auto w-50 border border-primary ">
        <div className="card-body"> 
          <div className='justify-content-between'>
            <h5 className="card-header p-2 m-2">Add Book</h5>
            <div class="input-group rounded">
              <input type="search" className="form-control rounded" placeholder="Goerge Orewell" aria-label="Search" aria-describedby="search-addon" />
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </div>
            <div className="m-10">
              <h5>1984</h5>
              <p>By Goerge Orewell</p>
            </div>
            <div className="m-6 h-50px">
              <button type="button" className="m-2 border border-success btn btn-outline-success">Shelf1</button>
              <button type="button" className="m-2 border border-success btn btn-outline-success">Shelf2</button>
              <button type="button" className="m-2 border border-success btn btn-outline-success">Shelf3</button>
              <button type="button" className="m-2 border border-success btn btn-outline-success">Shelf4</button>
            </div>
            <div className="card-footer m-2">
              <button class="btn btn-dark me-md-3 float-end" type="button">Cancel</button>
              <button class="btn btn-primary me-md-3 float-end" type="button">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBookToShelf;