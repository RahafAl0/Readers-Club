import BookCard from "../Card";
import Dropdown from 'react-bootstrap/Dropdown';

const Page = () => {
  return(
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Want to read
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Want to read</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Read</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Currently reading</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Want to read</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        <div className="row float-end w-100px h-50px">
          <button type="button" className="btn btn-outline-primary">Shelf 1</button>
          <button type="button" className="btn btn-outline-primary">Shelf 2</button>
        </div>
      
      <div className="m-20 ms-auto">
      <BookCard title='1984' url='/book/1984' author='Goerge Orewell'/>
      </div>
      
    </div>
    
  )
}

export default Page;