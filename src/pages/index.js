// src/pages/index
import React, { Component } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import ImageCard from "../components/ImageCard"
import SearchFunction from "../components/Searchfunction"
import GlobalStyle from "../styles/global"

import happy from "../images/happy.jpg"
import knightCat from "../images/KnightCat.jpg"
import low_fi from "../images/low-fi.jpg"
import misshif from "../images/misshif.jpg"
import sailor from "../images/sailor.jpg"
import evil from "../images/evil.jpg"
import lassy from "../images/lassy.jpg"
import ninja from "../images/ninja.jpg"
import robot from "../images/robot.jpg"
import witch from "../images/witch.jpg"

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { src: happy, desc: "Happy", liked: false, disliked: false },
        { src: knightCat, desc: "KnightCat", liked: false, disliked: false },
        { src: low_fi, desc: "Low-fi", liked: false, disliked: false },
        { src: misshif, desc: "Misshif", liked: false, disliked: false },
        { src: sailor, desc: "Sailor", liked: false, disliked: false },
        { src: evil, desc: "Evil", liked: false, disliked: false },
        { src: lassy, desc: "Lassy", liked: false, disliked: false },
        { src: ninja, desc: "Ninja", liked: false, disliked: false },
        { src: robot, desc: "Robot", liked: false, disliked: false },
        { src: witch, desc: "Witch", liked: false, disliked: false },
      ],
      filteredImages: [],
    };
  }

  componentDidMount() {
    // Initialisieren von filteredImages mit allen Bildern
    this.setState({ filteredImages: this.state.images })
  }

  setFilteredImages = (filteredImages) => {
    this.setState({ filteredImages })
  }

  /*toggleLike = (index) => {
    const updatedImages = [...this.state.images]
    const globalIndex = this.state.images.findIndex(
      (img) => img.desc === this.state.filteredImages[index].desc
    )
    updatedImages[globalIndex].liked = !updatedImages[globalIndex].liked
    this.setState({ images: updatedImages })
  }*/
  toggleLike = (index) => {
    const updatedImages = [...this.state.images];
    const globalIndex = this.state.images.findIndex(
      (img) => img.desc === this.state.filteredImages[index].desc
    );
  
    // Wenn Like aktiv ist, deaktivieren, ansonsten aktivieren und Dislike zurücksetzen
    updatedImages[globalIndex].liked = !updatedImages[globalIndex].liked;
    if (updatedImages[globalIndex].liked) {
      updatedImages[globalIndex].disliked = false;
    }
  
    this.setState({ images: updatedImages });
  };

  toggleDislike = (index) => {
    const updatedImages = [...this.state.images];
    const globalIndex = this.state.images.findIndex(
      (img) => img.desc === this.state.filteredImages[index].desc
    );
  
    // Wenn Dislike aktiv ist, deaktivieren, ansonsten aktivieren und Like zurücksetzen
    updatedImages[globalIndex].disliked = !updatedImages[globalIndex].disliked;
    if (updatedImages[globalIndex].disliked) {
      updatedImages[globalIndex].liked = false;
    }
  
    this.setState({ images: updatedImages });
  };
  deleteImage = (index) => {
    const toastId = toast(
      <div>
        Wollen Sie wirklich löschen?
        <div style={{ marginTop: "10px" }}>
          <button
            style={{
              marginRight: "10px",
              padding: "5px 10px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => this.confirmDelete(index, toastId)}
          >
            Ja
          </button>
          <button
            style={{
              padding: "5px 10px",
              background: "gray",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => this.cancelDelete(toastId)}
          >
            Nein
          </button>
        </div>
      </div>,
      { autoClose: false }
    )
  }

  confirmDelete = (index, toastId) => {
    const updatedImages = this.state.images.filter((_, i) => i !== index)
    const updatedFilteredImages = this.state.filteredImages.filter(
      (_, i) => i !== index
    )
    this.setState({
      images: updatedImages,
      filteredImages: updatedFilteredImages,
    })
    toast.dismiss(toastId) // Schließt den Toast, nachdem das Bild gelöscht wurde
    toast.success("Bild wurde erfolgreich gelöscht!")
  }

  cancelDelete = (toastId) => {
    toast.dismiss(toastId) // Schließt den Toast, wenn "Nein" geklickt wird
  }

  render() {
    return (
      <div>
        <SearchFunction
          images={this.state.images}
          onFilter={this.setFilteredImages}
        />
        <div>
          <GlobalStyle />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
              padding: "20px",
            }}
            >
            {this.state.filteredImages.map((image, index) => (
              <ImageCard
                key={index}
                image={image}
                onLike={() => this.toggleLike(index)}
                onDislike={() => this.toggleDislike(index)}
                onDelete={() => this.deleteImage(index)}
              />
            ))}
          </div>
        </div>
        <ToastContainer />
      </div>
    )
  }
}
