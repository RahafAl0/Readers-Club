import styles from './Buttons.module.css'


const Button = (props) => {
    return ( 
      <button className={styles.Buttons} >{props.text}</button>
       
      
    );
  };


  export default Button;
