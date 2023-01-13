import Modal from 'react-bootstrap/Modal';

function Dialog({handleClose, show, body, header, footer}) {
  return (
    <Modal style={{marginLeft: '350px'}} contentClassName="w-1000px " show={show} onHide={handleClose}>
      <Modal.Header>
        {header}
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        {footer}
      </Modal.Footer>    
    </Modal>
    
  );
}

export default Dialog;