import Review from './BookReviews';
import BookDetail from './BookDetail';

const BookPage = () => {
  return(
    <div> 
      <div>
        <BookDetail />
        <Review />
     </div>
     </div>
  )
  
}

export default BookPage;