import React, { Component } from "react"
import GlobalStyle from "../styles/global"

export default class ImageCard extends Component {
  render() {
    // variable deklarieren image / onLike / on Delete
    const { image, onLike, onDelete } = this.props
    return (
        
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <GlobalStyle />
        
        <img height="200px" src={image.src} alt={image.desc} style={{ width: '300px' }} />
        
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