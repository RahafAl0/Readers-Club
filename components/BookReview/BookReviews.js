import { faker } from '@faker-js/faker';
import AddShelf from './AddShelf';
import ProfilePicture from './ProfilePicture';

const Review = () => {
  return(
    <div>
      <div className="card m-auto w-50">
        <div className="card-body"> 
          <h5 className="card-title text-center">Card title</h5>
          <p className="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
          <img className="rounded-circle shadow-1-strong me-3"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp" alt="avatar" width="65"
            height="65" />
        </div>
      </div>
      <div className="card m-auto w-50">
      <div className="card-body"> 
        <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
        <img className="rounded-circle shadow-1-strong me-3"
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp" alt="avatar" width="65"
          height="65" />
      </div>
    </div>
    <button type="button" className="btn btn-primary">Add to</button>
    <button type="button" className="btn btn-primary">Add review</button>
    <ProfilePicture />
    <AddShelf/>
  </div>
  )
}




export default Review;

