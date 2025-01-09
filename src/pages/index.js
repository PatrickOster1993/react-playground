// Standart Lib importieren
import React, { Component } from "react"
// Eigene Component importiert 
import ImageCard from "../components/ImageCard"
// Design CSS
import GlobalStyle from "../styles/global"
// Images importieren
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
        { src: evil, desc: "evil", liked: false },
        { src: lassy, desc: "lassy", liked: false },
        { src: ninja, desc: "ninja", liked: false },
        { src: robot, desc: "robot", liked: false },
        { src: witch, desc: "witch", liked: false },
      ],
    }
  }

  //Funktionen

  toggleLike = (index) => {
    const updatedImages = [...this.state.images]
    updatedImages[index].liked = !updatedImages[index].liked
    this.setState({ images: updatedImages })
  }

  deleteImage = (index) => {
    const updatedImages = this.state.images.filter((_, i) => i !== index)
    this.setState({ images: updatedImages })
  }
  // rendern/ausgeben der WebSite/Html_Code
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
