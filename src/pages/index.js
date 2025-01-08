import React, { Component } from "react"
import happy from "../images/happy.jpg"
import knightCat from "../images/KnightCat.jpg"
import low_fi from "../images/low-fi.jpg"
import misshif from "../images/misshif.jpg"
import sailor from "../images/sailor.jpg"
import GlobalStyle from "../styles/global"

class ImageCard extends Component {
  render() {
    const { image, onLike, onDelete } = this.props
    return (
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <img src={image.src} alt={image.desc} style={{ width: '300px' }} />
        <p>{image.desc}</p>
        <button
          onClick={onLike}
          style={{
            backgroundColor: image.liked ? "#ff69b4" : "#ddd",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            marginRight: '10px'
          }}
        >
          {image.liked ? "Liked" : "Like"}
        </button>
        <button
          onClick={onDelete}
          style={{
            backgroundColor: "#ff4d4d",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px"
          }}
        >
          🗑️
        </button>
      </div>
    )
  }
}

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
      ],
    }
  }

  toggleLike = (index) => {
    const updatedImages = [...this.state.images]
    updatedImages[index].liked = !updatedImages[index].liked
    this.setState({ images: updatedImages })
  }

  deleteImage = (index) => {
    const updatedImages = this.state.images.filter((_, i) => i !== index)
    this.setState({ images: updatedImages })
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        {this.state.images.map((image, index) => (
          <ImageCard
            key={index}
            image={image}
            onLike={() => this.toggleLike(index)}
            onDelete={() => this.deleteImage(index)}
          />
        ))}
      </div>
    )
  }
}
