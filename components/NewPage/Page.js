import BookCard from "../Card";

const Page = () => {
  return(
    <div>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Want to read
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Want to read</a></li>
          <li><a class="dropdown-item" href="#">Read</a></li>
          <li><a class="dropdown-item" href="#">Currently reading</a></li>
          <li><a class="dropdown-item" href="#">My shelf</a></li>
        </ul>
        <div className="row border border-primary ">
          <button type="button" className="btn btn-outline-primary">Shelf 1</button>
          <button type="button" className="btn btn-outline-primary">Shelf 2</button>
        </div>
      </div>
      <div className="m-20">
        <BookCard />
      </div>
      
    </div>
    
  )
}

export default Page;