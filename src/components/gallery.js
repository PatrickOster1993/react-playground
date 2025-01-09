import React, { Component } from "react"
import Picture from "./picture"

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: this.props.pics.map((pic) => ({ ...pic, like: false })), // Jedes Bild erhält seinen eigenen "like"-Zustand
    }
  }

  deletePicture = (indexToRemove) => {
    const pictures = [...this.state.pictures] // Kopie des Arrays erstellen
    pictures.splice(indexToRemove, 1) // Bild entfernen
    this.setState({ pictures }) // State aktualisieren
  }

  toggleLike = (index) => {
    const pictures = [...this.state.pictures]
    pictures[index].like = !pictures[index].like // Zustand für das geklickte Bild umkehren
    this.setState({ pictures }) // State aktualisieren
  }

  render() {
    return this.state.pictures.map((image, index) => (
      <div key={index} className="gallery-element">
        <button onClick={() => this.deletePicture(index)}>🗑️</button>
        <Picture
          src={image.src}
          alt={image.alt}
          desc={image.desc}
          like={image.like} // Like-Status wird jetzt über props übergeben
          toggleLike={() => this.toggleLike(index)} // Funktion, um den Like-Status zu ändern
        />
      </div>
    ))
  }
}

export default Gallery
