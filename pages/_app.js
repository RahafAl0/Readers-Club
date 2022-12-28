import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({})

  const router = useRouter()
  const isPublicRoute = router.route == '/auth/login' || router.route == '/auth/register';
  const isObjectEmpty = (obj) => {
    if(typeof obj == "object" && obj !== null ) {
      return !Boolean(Object.keys(obj).length);
    } else return true;

  } 

  useEffect(() => {  
    const userItem = JSON.parse(localStorage.getItem('user') || null);
    if(isPublicRoute) { 
      !isObjectEmpty(userItem) && router.push('/');
      return;
    }
    if(isObjectEmpty(userItem) ||  user.expiry < Date.now()) {
      router.push('/auth/login');
      return;
    }
    setUser(userItem)
  }, [])

  if(!isPublicRoute && isObjectEmpty(user)) return <h1>Loading...</h1>

  return (
    <Component {...pageProps} />
 
  )
}


export default MyApp
