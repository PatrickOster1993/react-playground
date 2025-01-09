import React, { Component } from "react"
import Picture from "./picture"

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: this.props.pics.map((pic) => ({ ...pic, like: false })), // Jedes Bild erhält seinen eigenen "like"-Zustand
      searchQuery: "",
    }
  }

  deletePicture = (indexToRemove) => {
    // Bestätigungsabfrage vor dem Löschen
    const userConfirmed = window.confirm(
      "Möchten Sie das Bild wirklich löschen?"
    )
    if (userConfirmed) {
      const pictures = [...this.state.pictures] // Kopie des Arrays erstellen
      pictures.splice(indexToRemove, 1) // Bild entfernen
      this.setState({ pictures }) // State aktualisieren
    }
  }

  toggleLike = (index) => {
    const pictures = [...this.state.pictures]
    pictures[index].like = !pictures[index].like // Zustand für das geklickte Bild umkehren
    this.setState({ pictures }) // State aktualisieren
  }

  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value })
  }

  render() {
    const filteredPictures = this.state.pictures.filter((picture) =>
      picture.desc.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    )

    return (
      <div>
        <input
          type="text"
          placeholder="Suchen..."
          value={this.state.searchQuery}
          onChange={this.handleSearch}
        />

        <div className="gallery">
          {filteredPictures.map((image, index) => (
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
          ))}
        </div>
      </div>
    )
  }
}

export default Gallery
