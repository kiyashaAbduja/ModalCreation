// src/ImageGrid.js
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class ImageGrid extends Component {
    render() {
        const { images, openModal } = this.props;
        return (
            <Container>
                <Row>
                    {images.map((image, index) => (
                        <Col xs="12" sm="6" md="4" lg="3" key={index} className="mb-4">
                            <div className="image-item" onClick={() => openModal(index)}>
                                <img src={image.src} alt={`Image ${index}`} className="img-fluid rounded" />
                                <div className="image-name">{image.name}</div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default ImageGrid;
