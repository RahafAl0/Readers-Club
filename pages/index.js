import BookShelfRow from '../components/BookShelfRow'
import BookCard from '../components/Card'

export default function Home() {
  return (
    <div>
    {/* <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <a className={styles.card}>  
            <h2>
              <Card 
                bookCover={faker.image.cats()} 
                bookName={faker.animal.cat()} 
                authorName={faker.name.fullName()} 
                progress={Math.floor(Math.random() * 100)} 
                rating={Math.floor(Math.random() * 5)} 
              /> */}
              {[{title: "Currently Reading", shelfUrl: "currently-reading"},{title: "Read", shelfUrl: "read"},{title: "To Read", shelfUrl: "to-read"},{title: "My Shelf", shelfUrl: "my-shelf"}].map((val, index) => {
                return(<BookShelfRow title={val.title} shelfUrl={val.shelfUrl}/>)
              })}
              {/* <BookCard/> */}

          <div className='flex'>         
            <div>
              {/* <CustomButton variant='danger'></CustomButton> */}
            </div>
          </div>
             {/* </h2>
           </a>
         </div>
       </main> */}

       {/* <div>
       <p> */}

         {/* <div className={styles.grid}>
           <UserProgress className={styles.card} bgColor='blueviolet' text='All Book' status={Math.floor(Math.random() * 100)} /> 
         </div>
         <div className={styles.grid}> 
           <UserProgress className={styles.card} bgColor='blueviolet' text='read' status={Math.floor(Math.random() * 100)} /> 
         </div>
         <div className={styles.grid}>
           <UserProgress className={styles.card} bgColor='blueviolet' text='Currently Reading' status={Math.floor(Math.random() * 100)} /> 
         </div>
         <div className={styles.grid}>
             <UserProgress className={styles.card} bgColor='blueviolet' text='Want To Read' status={Math.floor(Math.random() * 100)} />
         </div> */}
        
    
         {/* </p>
       </div>
     </div> */}
     </div>
  )
  
}

