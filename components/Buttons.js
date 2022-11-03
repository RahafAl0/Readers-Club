

const Button = (props) => {
  return ( 
    <button style={{background:props.bgColor, color:props.fontColor, padding: '16px'}} size='lg'>{props.text}</button> 
  );
};


  export default Button;
