// src/App.js
import React, { Component } from 'react';
import { images } from './component/ImageData';
import ImageGrid from './component/ImageGrid';
import ImageModal from './component/Modal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      currentIndex: 0,
    };
  }

  openModal = (index) => {
    this.setState({ currentIndex: index, modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  prevImage = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + images.length) % images.length,
    }));
  };

  nextImage = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % images.length,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1 className="text-center my-4">Image Grid</h1>
        <ImageGrid images={images} openModal={this.openModal} />
        <ImageModal
          isOpen={this.state.modalOpen}
          toggle={this.closeModal}
          image={images[this.state.currentIndex]}
          prevImage={this.prevImage}
          nextImage={this.nextImage}
          currentIndex={this.state.currentIndex}
          totalImages={images.length}
        />
      </div>
    );
  }
}

export default App;
