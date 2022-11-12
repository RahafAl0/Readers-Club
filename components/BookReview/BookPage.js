import Sidebar from '../sidebar';
import Searchbar from './Searchbar';
import Review from './BookReviews';
import BookDetail from './BookDetail';

const BookPage = () => {
  return(
    <div> 
      <div>
      
        <Searchbar />
        <BookDetail />
        <Review />
        <Sidebar style={{marginTop:'5%'}}/>
     </div>
     </div>
  )
  
}

export default BookPage;