import Card from 'react-bootstrap/Card';
import { faker } from '@faker-js/faker';

const BookDetail = () => {
  return(
    <div style={{margin: 'right'}}>
      <Card class="p-2 border" style={{ width: '50rem',height:'30rem', margin:'auto' }}>
        <Card.Img class="rounded  d-block" src={faker.image.cats()} width='200px' height='300px'  />
        <Card.Body>
        
        <Card.Title style={{textIndent:'10cm'}}>
          {faker.name.fullName()}
          
          {faker.animal.cat()}
         

        </Card.Title>
        <Card.Text style={{textIndent:''}}>
            Some quick example text to build on the card title 
            and make up the bulk of the card's content.
        </Card.Text >
          </Card.Body>
      </Card>
    </div>
  )
}

export default BookDetail