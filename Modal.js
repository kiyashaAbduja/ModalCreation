import React, { Component } from 'react';
import { Modal, ModalBody, Button } from 'reactstrap';
import './ImageModal.css'; // Import the CSS file

class ImageModal extends Component {
    render() {
        const { isOpen, toggle, image, prevImage, nextImage, currentIndex, totalImages } = this.props;
        return (
            <Modal isOpen={isOpen} toggle={toggle} className="modal-fullscreen">
                <ModalBody className="text-center modal-body-custom">
                    <div className="modal-content-wrapper">
                        <img src={image.src} alt={image.name} className="img-fluid modal-image" />
                        <Button color="secondary" onClick={toggle} className="modal-close-btn">
                            &times;
                        </Button>
                        <Button color="primary" onClick={prevImage} className="modal-prev-btn" disabled={currentIndex === 0}>
                            Prev
                        </Button>
                        <Button color="primary" onClick={nextImage} className="modal-next-btn" disabled={currentIndex === totalImages - 1}>
                            Next
                        </Button>
                        <div className="pagination-text text-primary">
                            {currentIndex + 1} / {totalImages}
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}

export default ImageModal;
