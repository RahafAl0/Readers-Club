import { faker } from '@faker-js/faker';

const BookCard = () => {
  return(
    <div className="card border w-175px h-275px m-auto">
      <div>
        <img className=" m-auto d-block w-75px h-125px"
             src={faker.image.cats()} alt="avatar" width="75"
             height="100" />
      </div>
      <div className="card-body">
        <h5 className="text">1984</h5>
        <p className="text">By George Orewell</p>
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