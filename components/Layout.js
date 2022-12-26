import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";

export default function Layout({ children }) {
  return(
  <div className="d-flex flex-column flex-root">
    <div className="page d-flex flex-row flex-column-fluid">
      <div className="wrapper d-flex flex-column flex-row-fluid">
        <div className='header'> <Searchbar/>          </div>
        <div className="d-flex flex-column flex-column-fluid">
          <main>{children}</main>
        </div>
      </div>
      <div className='sidebar bg-info w-325px'>   <Sidebar/>          </div>
    </div>
  </div>
  )
}
