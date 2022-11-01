import Card from '../components/Card'
import styles from '../styles/Home.module.css'
import { faker } from '@faker-js/faker';
import Button from '../components/Buttons'


export default function Home() {
  const randomName = faker.name.fullName(); // Rowan Nikolaus
  const bookName = faker.animal.cat();
  const bookCover = faker.image.cats();

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
            <h2><Card 
              bookCover={bookCover} 
              bookName={randomName} 
              authorName={bookName} 
              progress={generateProgress()} 
              rating={rating()} 
              />
              <Button text='Add to'/>
              <Button text='Add review'/>
              <Button text='Add book'/>

            </h2>
          </a>
        </div>
      </main>
    </div>
  )
}
