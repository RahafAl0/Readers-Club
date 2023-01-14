import Modal from 'react-bootstrap/Modal';

function Dialog({handleClose, show, body, header, footer, styling={}, contentClassName=''}) {
  return (
    <Modal style={styling} contentClassName={contentClassName} show={show} onHide={handleClose}>
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