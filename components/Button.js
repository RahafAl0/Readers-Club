import Button from 'react-bootstrap/Button';

function CustomButton({variant, children}) {
  return (
    
      <Button variant={variant}>{children}</Button>
  
    
  );
}

export default CustomButton;