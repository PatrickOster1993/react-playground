import React, { Component } from "react"
import Picture from "./picture"

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: [...props.pics], // Kopiere das Array in den State
    }
  }

  deletePicture = (indexToRemove) => {
    const pictures = [...this.state.pictures] // Kopie des Arrays erstellen
    pictures.splice(indexToRemove, 1) // Bild entfernen
    this.setState({ pictures }) // State aktualisieren
  }

  render() {
    return this.state.pictures.map((image, index) => (
      <div key={index}>
        <button onClick={() => this.deletePicture(index)}>🗑️</button>
        <Picture src={image.src} alt={image.alt} desc={image.desc} />
      </div>
    ))
  }
}

export default Gallery
