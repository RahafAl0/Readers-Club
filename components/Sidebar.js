import { faker } from '@faker-js/faker';

const Sidebar = () => {
  return(
      <div className="d-flex flex-column sidebar-body bg-info">
        <img className="h-150px w-150px rounded-circle mx-auto d-block"
             src={faker.image.cats()} 
        />
        <div className="text text-center m-10 color-white">
          <h4>Rahaf Almusleh</h4>
        </div>
        <div>
          <div className='row d-flex justify-content-center '>
            <div className="p-2 card bg-primary w-125px h-100px m-5">
              <div class="card-body">
                <p class="card-text">hh</p>
              </div>
            </div>
            <div className="p-2 card bg-primary w-125px h-100px m-5">
              <div class="card-body">
                <p class="card-text">hh</p>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
            <div className="p-2 card bg-primary w-125px h-100px m-5">
              <div class="card-body">
                <p class="card-text">hh</p>
              </div>
            </div>
            <div className="p-2 card bg-primary w-125px h-100px m-5">
              <div class="card-body">
                <p class="card-text">hh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    

  )
}

export default Sidebar;



// import Card from 'react-bootstrap/Card';
// import { faker } from '@faker-js/faker';
// import CustomButton from './Button';
// import Image from "react-bootstrap/Image";


// const Sidebar = () => {
//   return (
    
//     <div>
//       <div style={{width: '300px', height:'100vh', backgroundColor:'blueviolet' ,display:'flex', flexDirection:'column', alignItems:'', justifyContent:'center'}}>
//             <Image style={{display:'flex', margin: 'auto', width:170, height:170}} 
//                    src={faker.image.cats()} roundedCircle
//             />
//         <div style={{color:'white', margin:'auto'}}>
//           <h4>Rahaf Almusleh</h4>
//           </div>
//           <div style={{display:'flex', gap:'5px', margin:'auto'}}>
//             <div>
//               <Card class="p-2 border" style={{ width: '7rem', height: '7rem', backgroundColor:'darkorchid', color:'white' }}>
//               <Card.Body>
//                 <Card.Text>
//                 {Math.floor(Math.random() * 100)}
//                 </Card.Text>
//                 <Card.Text>
//                   All Book
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//             <Card class="p-2 border" style={{ width: '7rem', height: '7rem', backgroundColor:'darkorchid', color:'white' }}>
//               <Card.Body>
//               <Card.Text>
//                 {Math.floor(Math.random() * 100)}
//                 </Card.Text>
//                 <Card.Text>
//                   Read 
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </div>
//           <div>
//             <Card class="p-2 border" style={{ width: '7rem', height: '7rem', backgroundColor:'darkorchid', color:'white' }}>
//               <Card.Body>
//               <Card.Text>
//                 {Math.floor(Math.random() * 100)}
//                 </Card.Text>
//                 <Card.Text>
//                   Currently Reading 
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//             <Card class="p-2 border" style={{ width: '7rem', height: '7rem', backgroundColor:'darkorchid', color:'white' }}>
//               <Card.Body>
//               <Card.Text>
//                 {Math.floor(Math.random() * 100)}
//                 </Card.Text>
//                 <Card.Text>
//                   Want to Read 
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </div>
//         </div>
//         <div style={{display:'flex', flexDirection:'column', margin:'auto', gap:'10px', color:'#6A2ABB'}}>
//           <CustomButton variant='primary'>Add Shelf</CustomButton> 
//           <CustomButton variant='primary'>Add Book</CustomButton>
//         </div> 
//       </div>
//     </div>
    
//   );
// }

// export default Sidebar;