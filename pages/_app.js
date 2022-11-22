import '../styles/globals.css'
import Searchbar from '../components/BookPages/Searchbar'
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }) {
  return (
    <div className="d-flex flex-column flex-root">
      <div className='page d-flex flex-row flex-column-fluid'>
        <div className='wrapper d-flex flex-column flex-row-fluid'>
          <div className='header'>
            <Searchbar/>          </div>
          <div className='d-flex flex-column flex-column-fluid'>
            <Component {...pageProps} />
          </div>
          
        </div>
        <div className='sidebar bg-info'>
            <Sidebar/>          </div>
      </div>
    </div>
  )
}

export default MyApp
