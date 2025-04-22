import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalProyecto({nombre, desc, fulldesc, img, lenguajes, github, url}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button className='proyecto-detallesbtn' variant="primary" onClick={handleShow}>
        Detalles
      </Button>

      <Modal show={show} className='proyecto-modal-container' onHide={handleClose}>
        
        <Modal.Header>
          <i onClick={() => setShow(!show)} className="bi bi-x-lg modal-close"></i>
        </Modal.Header>
        <div className='modal-proyecto-content'>
            <img src={img} alt='proyecto_portada'/>
            {nombre}
            {desc}
            {fulldesc}
            {lenguajes}
            <div className='scroll-down-container'>
            <span className='scroll-down scroll-text'>Scroll</span>
            <i className="bi bi-arrow-down-circle-fill scroll-down"></i>
            </div>
        </div>
        
        
        <Modal.Footer>
          <Button className='modal-btn' onClick={handleClose}>
            <a href={url} target='_blank' rel="noreferrer noopener">Ver proyecto</a>
          </Button>
          {github !== false ? (
            <Button className='modal-btn' onClick={handleClose} >
              <a href={github} target='_blank' rel="noreferrer noopener">Github</a>
            </Button>
          ) :
            <Button className='modal-btn' onClick={handleClose} disabled>
              Github
            </Button>
          }
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProyecto;