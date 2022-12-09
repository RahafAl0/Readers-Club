import Modal from 'react-bootstrap/Modal';

function Dialog({handleClose, show, body, header, footer}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
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