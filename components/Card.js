import { faker } from '@faker-js/faker';
import Card from 'react-bootstrap/Card';

function BookCard() {
  return (
    <Card class="p-2 border" style={{ width: '18rem' }}>
      <Card.Img class="rounded mx-auto d-block" src={faker.image.cats()} width='150px' height='200px'  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div>Progress {Math.floor(Math.random() * 100)}</div>
        <div>Rate {Math.floor(Math.random() * 5)}</div>

        
      
      </Card.Body>
    </Card>
  );
}

export default BookCard;

// const Card = (props) => {
//   return (
//     <div>
//       <img src={props.bookCover} width="70px"/>
//       <p>{props.bookName}</p>
//       <p>by {props.authorName}</p>
//       <p>Progress {props.progress}%</p>
//       <p>Rating {props.rating}</p>
//     </div>
//   )
// }

// export default Card;