import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import LocaleSwitcher from "./LanguageSwitcher";
import { Router, useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter()

  return(
  <div className="d-flex flex-column flex-root">
    <div className="page d-flex flex-row flex-column-fluid">
      {router.locale == 'ar'?  <div className='sidebar bg-info w-325px'>   <Sidebar/>          </div> : null}
      <div className="wrapper d-flex flex-column flex-row-fluid">
        <div className='header'>
          <LocaleSwitcher />
           <Searchbar/>          </div>
        <div className="d-flex flex-column flex-column-fluid">
          <main>{children}</main>
        </div>
      </div>
      {router.locale == 'en'?  <div className='sidebar bg-info w-325px'>   <Sidebar/>          </div> : null}
    </div>
  </div>
  )
}
