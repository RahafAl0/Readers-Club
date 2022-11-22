
const Searchbar = () => {
  return(

        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-5 w-800px" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>

  )
}

export default Searchbar;