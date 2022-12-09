import AddBookCard from "../AddBookCard";
import Dialog from "../Dialog";

const AddNewBook = ({ handleClose, show }) => {
  return (
    <Dialog
      show={show}
      handleClose={handleClose}
      header={
        <>
          <div className="justify-content-between">
            <h5 className="card-header p-2 m-2">Add book</h5>
            <div className="m-10">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Goerge Orewell"
                aria-label="Search"
              />
            </div>
          </div>
        </>
      }
      body={
        <>
          <div className="row m-2 p-2">
            <AddBookCard title='1984' url='/book/1984' author='Goerge Orewell'/>
            <AddBookCard title='1984' url='/book/1984' author='Goerge Orewell'/>
            <AddBookCard title='1984' url='/book/1984' author='Goerge Orewell'/>
            <AddBookCard title='1984' url='/book/1984' author='Goerge Orewell'/>
          </div>
        </>
      }
      footer={
        <>
          <button class="btn btn-dark me-md-3 float-end" type="button" onClick={handleClose}>Cancel</button>
        </>
      }
    />
  );
  // return (
  //   <div>
  //     <div className="card m-auto justify-content w-1000px h-600px border border-primary ">
  //       <div className="card-body">
  //         <div className="justify-content-between">
  //           <h5 className="card-header p-2 m-2">Add book</h5>
  //           <div className="m-10">
  //             <input
  //               class="form-control me-2"
  //               type="search"
  //               placeholder="Goerge Orewell"
  //               aria-label="Search"
  //             />
  //           </div>
  //         </div>
  //         <div className="row m-2 p-2">
  //           <BookCard />
  //           <BookCard />
  //           <BookCard />
  //           <BookCard />
  //         </div>
  //         <div className="card-footer m-10"></div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default AddNewBook;
