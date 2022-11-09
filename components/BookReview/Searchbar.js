import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Searchbar = () => {
  return(
    <div>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="inline-success">Search</Button>
          </Form>
    </div>
  )
}

export default Searchbar;