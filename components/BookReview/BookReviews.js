import Card from 'react-bootstrap/Card';
import { faker } from '@faker-js/faker';
import Image from "react-bootstrap/Image";


const Review = () => {
  return(
    <div>
      <div>
        <Card class="p-2 border" style={{ width: '40rem', height:'7rem', margin:'auto' }}>
            <Image style={{display:'flex', width:100, height:140}} 
                   src={faker.image.cats()} roundedCircle />
            <div>
              <Card.Title>
                  rahaf
              </Card.Title>
            </div>
        </Card>
        
      </div>
      <div>
        <Card class="p-2 border" style={{ width: '40rem', height:'7rem', margin:'auto' }}>
          <Image style={{display:'flex', width:100, height:140}} 
                 src={faker.image.cats()} roundedCircle />
        </Card>
      </div>
      
    </div>
  )
}


export default Review;