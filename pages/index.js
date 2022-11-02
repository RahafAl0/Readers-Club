import Card from '../components/Card'
import styles from '../styles/Home.module.css'
import { faker } from '@faker-js/faker';
import Button from '../components/Buttons'


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
            <h2><Card 
              bookCover={faker.image.cats()} 
              bookName={faker.animal.cat()} 
              authorName={faker.name.fullName()} 
              progress={generateProgress()} 
              rating={rating()} 
              />
              <Button bgColor='aqua' text='Add to'/>
              <Button bgColor='aqua' text='Add review'/>
              <Button bgColor='blueviolet' text='Add book' />

            </h2>
          </a>
        </div>
      </main>
    </div>
  )
}
