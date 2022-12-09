import Modal from 'react-bootstrap/Modal';

function Dialog({handleClose, show, content}) {
  return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
          
      </Modal>
    
  );
}

export default Dialog;