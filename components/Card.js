import './Card.module.css';

const Card = (props) => {
  return (
    <div>
      <img src={props.bookCover} width="160px"/>
      <p>{props.bookName}</p>
      <p>by {props.authorName}</p>
      <p>Progress {props.progress}%</p>
      <p>Rating {props.rating}</p>
    </div>
  )
}

export default Card;