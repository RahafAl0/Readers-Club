import { faker } from '@faker-js/faker';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';


function BookCard() {
  return (
    <Card class="p-2 border" style={{ width: '18rem' }}>
      <Card.Img class="rounded mx-auto d-block" src={faker.image.cats()} width='150px' height='200px'  />
      <Card.Body>
        <Card.Title>{faker.animal.cat()}</Card.Title>
        <Card.Text>
          Some quick example
        </Card.Text>
        <div>Progress <ProgressBar now={60} /></div>
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