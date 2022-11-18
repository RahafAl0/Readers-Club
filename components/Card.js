import { faker } from '@faker-js/faker';

const BookCard = () => {
  return(
    <div className="card border w-200px h-300px m-auto">
      <div className="p-3">
        <img className=" m-auto d-block w-100px h-150px"
             src={faker.image.cats()} alt="avatar" width="100"
             height="100" />
      </div>
      <div className="card-body">
        <h5 className="text">{faker.animal.cat()}</h5>
        <p className="text">{faker.name.fullName()}</p>
        <div class="progress">
          <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          25%
        </div>
        Rating {Math.floor(Math.random() * 5)}% 
      </div>
      </div>
  )
}

export default BookCard;