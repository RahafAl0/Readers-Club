import BookCard from "../Card";

const ShelfScreen = (props) => {
  return (
    <div className='content fs-6 d-flex flex-column-fluid' id='kt_content'>
    <div className='container'>
      <div className='card'>
        <div className='card-body'>
          <div className='mb-10'>
          <div className='d-flex justify-content-between align-items-center mb-7'>
            <h2 className='fw-bolder text-dark fs-2 mb-0'>{props.shelfName}</h2>
          </div>
          <div className='row g-5 g-xxl-8 m-4'>
          <BookCard title='1984' url='/book/1984' author='Goerge Orewell'/>
          <BookCard title='1984' url='/book/1984' author='Goerge Orewell'/>
          <BookCard title='1984' url='/book/1984' author='Goerge Orewell'/>
          <BookCard title='1984' url='/book/1984' author='Goerge Orewell'/>

          </div>
          <div className='row g-5 g-xxl-8 m-4'>
          <BookCard title='1984' url='/book/1984' author='Goerge Orewell'/>
          <BookCard title='1984' url='/book/1984' author='Goerge Orewell'/>
          <BookCard title='1984' url='/book/1984' author='Goerge Orewell'/>
          <BookCard title='1984' url='/book/1984' author='Goerge Orewell'/>

          </div>
          <div className='row g-5 g-xxl-8 m-4'>
          <BookCard title='1984' url='/book/1984' author='Goerge Orewell'/>
          <BookCard title='1984' url='/book/1984' author='Goerge Orewell'/>
          <BookCard title='1984' url='/book/1984' author='Goerge Orewell'/>
          <BookCard title='1984' url='/book/1984' author='Goerge Orewell'/>

          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default ShelfScreen;