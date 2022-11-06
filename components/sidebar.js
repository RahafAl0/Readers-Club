import Card from 'react-bootstrap/Card';
import { faker } from '@faker-js/faker';
import CustomButton from './Button';


const Sidebar = () => {
  return (
    <div>
      <div  style={{width: '400px', height:'100vh', backgroundColor:'blueviolet' ,display:'flex', gap:'10px', justifyContent:'center'}}>
        
        <div >
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
      <CustomButton display='flex' variant='primary'>Add Shelf</CustomButton> 
        <CustomButton  variant='primary'>Add Book</CustomButton>
      </div>
       

      </div>
    </div>
  );
}

export default Sidebar;