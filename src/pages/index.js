import React, { Component } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import ImageCard from "../components/ImageCard"
import Searchfunction from "../components/Searchfunction"

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
    super(props)
    this.state = {
      images: [
        { src: happy, desc: "Happy", liked: false },
        { src: knightCat, desc: "KnightCat", liked: false },
        { src: low_fi, desc: "Low-fi", liked: false },
        { src: misshif, desc: "Misshif", liked: false },
        { src: sailor, desc: "Sailor", liked: false },
        { src: evil, desc: "Evil", liked: false },
        { src: lassy, desc: "Lassy", liked: false },
        { src: ninja, desc: "Ninja", liked: false },
        { src: robot, desc: "Robot", liked: false },
        { src: witch, desc: "Witch", liked: false },
      ],
      searchQuery: "", // Initialisieren des Such-Strings
    }
  }

  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value.toLowerCase() })
  }

  toggleLike = (index) => {
    const updatedImages = [...this.state.images]
    updatedImages[index].liked = !updatedImages[index].liked
    this.setState({ images: updatedImages })
  }

  deleteImage = (index) => {
    toast(
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
            onClick={() => this.confirmDelete(index)}
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
            onClick={toast.dismiss}
          >
            Neein
          </button>
        </div>
      </div>,
      { autoClose: false }
    )
  }

  confirmDelete = (index) => {
    const updatedImages = this.state.images.filter((_, i) => i !== index)
    this.setState({ images: updatedImages })
    toast.dismiss()
    toast.success("Bild wurde erfolgreich gelöscht!")
  }

  render() {
    const filteredImages = this.state.images.filter(image =>
      image.desc.toLowerCase().includes(this.state.searchQuery)
    )

    return (
      <div>
        <input
          type="text"
          placeholder="Suchen..."
          value={this.state.searchQuery}
          onChange={this.handleSearch}
          style={{
            width: "100%",
            padding: "10px",
            margin: "20px 0",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
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
            {filteredImages.map((image, index) => (
              <ImageCard
                key={index}
                image={image}
                onLike={() => this.toggleLike(index)}
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