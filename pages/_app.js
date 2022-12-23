import '../styles/globals.css'
import Searchbar from '../components/BookPages/Searchbar'
import Sidebar from '../components/Sidebar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({})

  const router = useRouter()
  const isPublicRoute = router.route == '/auth/login' || router.route == '/auth/register';

  useEffect(() => {
    console.log(router);
    if(isPublicRoute) return;
    const userItem = JSON.parse(localStorage.getItem('user') || null);
    if(!userItem || user.expiry < Date.now()) {
      router.push('/auth/login');
      return;
    }
    setUser(userItem)
  }, [])

  if(!isPublicRoute && !Object.keys(user).length) return <h1>Loading...</h1>

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
        <div className='sidebar bg-info w-325px'>
            <Sidebar/>          </div>
      </div>
    </div>
  )
}

export default MyApp
