import Card from 'react-bootstrap/Card';
import { faker } from '@faker-js/faker';
import CustomButton from './Button';
import Image from "react-bootstrap/Image";


const Sidebar = () => {
  return (
    
    <div>
      <div style={{width: '400px', height:'100vh', backgroundColor:'blueviolet' ,display:'flex', flexDirection:'column', alignItems:'', justifyContent:'center'}}>
            <Image style={{display:'flex', margin: 'auto'}}  width='150px' height='100' src={faker.image.cats()} roundedCircle/>
       
        <div style={{color:'white', margin:'auto'}}>
          <h4>Rahaf Almusleh</h4>
          </div>
          <div style={{display:'flex', gap:'10px', margin:'auto'}}>
            <div>
              <Card class="p-2 border" style={{ width: '10rem', height: '10rem', backgroundColor:'darkorchid', color:'white' }}>
              <Card.Body>
                <Card.Text>
                  All Book {Math.floor(Math.random() * 100)}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card class="p-2 border" style={{ width: '10rem', height: '10rem', backgroundColor:'darkorchid', color:'white' }}>
              <Card.Body>
                <Card.Text>
                  Read {Math.floor(Math.random() * 100)}
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card class="p-2 border" style={{ width: '10rem', height: '10rem', backgroundColor:'darkorchid', color:'white' }}>
              <Card.Body>
                <Card.Text>
                  Currently Reading {Math.floor(Math.random() * 100)}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card class="p-2 border" style={{ width: '10rem', height: '10rem', backgroundColor:'darkorchid', color:'white' }}>
              <Card.Body>
                <Card.Text>
                  Want to Read {Math.floor(Math.random() * 100)}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div style={{display:'flex', flexDirection:'column', margin:'auto', gap:'10px'}}>
          <CustomButton variant='primary'>Add Shelf</CustomButton> 
          <CustomButton variant='primary'>Add Book</CustomButton>
        </div> 
      </div>
    </div>
    
  );
}

export default Sidebar;