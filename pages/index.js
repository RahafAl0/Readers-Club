import BookShelfRow from '../components/BookShelfRow'

export default function Home() {
  return (
    <div>
      {[{title: "Currently Reading", shelfUrl: "currently-reading"},{title: "Read", shelfUrl: "read"},{title: "To Read", shelfUrl: "to-read"},{title: "My Shelf", shelfUrl: "my-shelf"}].map((val, index) => {
          return(<BookShelfRow title={val.title} shelfUrl={val.shelfUrl}/>)
      })}        
    </div>
  )
  
}

