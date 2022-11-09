import Card from 'react-bootstrap/Card';
import { faker } from '@faker-js/faker';

const BookDetail = () => {
  return(
    <Card class="p-2 border" style={{ width: '50rem',height:'30rem', margin:'auto' }}>
      <Card.Img class="rounded  d-block" src={faker.image.cats()} width='200px' height='300px'  />
      <Card.Body>
      <Card.Title>{faker.animal.cat()}</Card.Title>
      <Card.Text>
          Some quick example
      </Card.Text>
          
        </Card.Body>
    </Card>
  )
}

export default BookDetail