import Card from 'react-bootstrap/Card';
import { faker } from '@faker-js/faker';
import Image from "react-bootstrap/Image";
import CustomButton from '../Button';


const Review = () => {
  return(
    <div>
      <div>
        <Card class="p-2 border flex" style={{width: '40rem', height:'7rem', margin:'auto'}}>
            <Image style={{width:100, height:100}} 
                   src={faker.image.cats()} roundedCircle />
              <div>
                Rahaf Rated it {Math.floor(Math.random() * 5)}
              </div>
        </Card>
        
      </div>
      <div>
        <Card class="p-2 border flex" style={{width: '40rem', height:'7rem', margin:'auto'}}>
          <Image style={{display:'flex', width:100, height:100}} 
                 src={faker.image.cats()} roundedCircle />
            <div>
              Rahaf Rated it {Math.floor(Math.random() * 5)}
            </div>
        </Card>
      </div>
      <div style={{flexDirection:'column', margin:'auto', gap:'10px', color:'#6A2ABB'}}>
          <CustomButton variant='primary'>Add to</CustomButton> 
          <CustomButton variant='primary'>Add review</CustomButton>
        </div> 
    </div>
  )
}


export default Review;