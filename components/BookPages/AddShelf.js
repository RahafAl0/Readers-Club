const AddShelf = () => {
  return(
    <div class="m-auto w-400px h-225px">
      <h5 className="p-5 text-center">Add Shelf</h5>
      <input className=" m-auto w-375px form-control" type="text" placeholder="Add shelf" aria-label="default input example"/>
      <div className="p-5">
        <button class="btn btn-primary me-md-10 float-end" type="button">Add</button>
      </div>
    </div>
  )
}

export default AddShelf;