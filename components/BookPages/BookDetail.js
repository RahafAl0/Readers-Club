const BookDetail = () => {
  return (
    <div className="card border mb-3 w-700px h-120px m-auto">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327144697l/3744438.jpg"
            class="img-fluid rounded-start"
            alt="..."
            style={{ height: "450px" }}
          />
        </div>
        <div className="col-md-8 ">
          <div className="card-header">
            <p className="fw-bold fs-1">1984</p>
            <p className="fs-1 fw-bold">Goerge Orewell</p>
          </div>
          <div className="card-body">
            <p className="card-text">
              The new novel by George Orwell is the major work towards which all
              his previous writing has pointed. Critics have hailed it as his
              "most solid, most brilliant" work. Though the story of Nineteen
              Eighty-Four takes place thirty-five years hence, it is in every
              sense timely. The scene is London, where there has been no new
              housing since 1950 and where the city-wide slums are called
              Victory Mansions. Science has abandoned Man for the State. As
              every citizen knows only too well, war is peace
            </p>
            <div className="card-footer">
              <p>368 pages</p>
              <p>Published July 2022 by Plume (first published 1949)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
