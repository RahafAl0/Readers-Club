import Card from '../components/Card'
import styles from '../styles/Home.module.css'
import { faker } from '@faker-js/faker';
import Button from '../components/Buttons'
import UserProgress from '../components/UserProgress';


export default function Home() {

  const generateProgress = () => {
    return Math.floor(Math.random() * 100);
  }

  const rating = () => {
    return Math.floor(Math.random() * 5);
}

  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <div className={styles.grid}>
          <a className={styles.card}>
          
            <h2>
              <Card 
                bookCover={faker.image.cats()} 
                bookName={faker.animal.cat()} 
                authorName={faker.name.fullName()} 
                progress={generateProgress()} 
                rating={rating()} 
              />

              <Button bgColor='aqua' text='Add to'/>
              <Button bgColor='aqua' text='Add review'/>
              <Button bgColor='blueviolet' fontColor='aqua' text='Add book' />
            
          
<           div className={styles.grid}>
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
          
            </div>

            </h2>
          </a>
        </div>
      </main>
    </div>
  )
  
}

