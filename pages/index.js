import BookCard from '../components/Card'
import styles from '../styles/Home.module.css'
import CustomButton from '../components/Button'
import UserProgress from '../components/UserProgress';
import Sidebar from '../components/sidebar' 



export default function Home() {
  return (
    // <div className={styles.container}>
    //   <main className={styles.main}>
    //     <div className={styles.grid}>
    //       <a className={styles.card}>  
    //         <h2>
    //           <Card 
    //             bookCover={faker.image.cats()} 
    //             bookName={faker.animal.cat()} 
    //             authorName={faker.name.fullName()} 
    //             progress={Math.floor(Math.random() * 100)} 
    //             rating={Math.floor(Math.random() * 5)} 
    //           />
          <div className='flex'>
              <Sidebar>
                
              </Sidebar>
           
            <div>
              {/* <CustomButton variant='danger'></CustomButton> */}
              <BookCard/>
            </div>
          </div>
      //       </h2>
      //     </a>
      //   </div>
      // </main>

    //   <div>
    //   <p>

    //     <div className={styles.grid}>
    //       <UserProgress className={styles.card} bgColor='blueviolet' text='All Book' status={Math.floor(Math.random() * 100)} /> 
    //     </div>
    //     <div className={styles.grid}> 
    //       <UserProgress className={styles.card} bgColor='blueviolet' text='read' status={Math.floor(Math.random() * 100)} /> 
    //     </div>
    //     <div className={styles.grid}>
    //       <UserProgress className={styles.card} bgColor='blueviolet' text='Currently Reading' status={Math.floor(Math.random() * 100)} /> 
    //     </div>
    //     <div className={styles.grid}>
    //         <UserProgress className={styles.card} bgColor='blueviolet' text='Want To Read' status={Math.floor(Math.random() * 100)} />
    //     </div>
        
    
    //     </p>
    //   </div>
    // </div>
  )
  
}

