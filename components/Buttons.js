

const Button = (props) => {
  return ( 
    <button style={{background:props.bgColor, color:props.fontColor}} >{props.text}</button> 
  );
};


  export default Button;
