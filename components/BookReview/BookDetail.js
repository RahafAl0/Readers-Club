import { faker } from '@faker-js/faker';

const BookDetail = () => {
  return(
    <div className="card border mb-3 w-700px h-120px m-auto">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={faker.image.cats()} class="img-fluid rounded-start" alt="..." style={{height:'450px'}}/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
          <p className="fw-bold fs-1">{faker.name.fullName()}</p>
          <p className="fs-1 fw-bold">{faker.name.fullName()}</p>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail