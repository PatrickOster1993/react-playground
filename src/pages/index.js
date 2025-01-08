// Importiert React und die Basisklasse Component, die für Klassenkomponenten verwendet wird.
import React, { Component } from "react"
// Importiert das Bild
import happy from "../images/happy.jpg"
import knightCat from "../images/KnightCat.jpg"
import low_fi from "../images/low-fi.jpg"
import misshif from "../images/misshif.jpg"
import sailor from "../images/sailor.jpg"
// Importiert globales Styling, um die gesamte Anwendung zu stylen.
import GlobalStyle from "../styles/global"

//const buttonNames = [{title:"schöner button"},{title:"Normaler button"},{title:"ugly button"}]

export default class Index extends Component {
  constructor(props) {
    super(props)
    // Speichere die Bilder im State
    this.state = {
      images: [
        { src: happy, desc: "Happy" },
        { src: knightCat, desc: "KnightCat" },
        { src: low_fi, desc: "Low-fi" },
        { src: misshif, desc: "Low-fi" },
        { src: sailor, desc: "Low-fi" },
      ],
    }
  }
 
  render() {
    return (
      <div>
        <GlobalStyle />

        {/*{buttonNames.map((button, index) => (<button key={index}>{button.title}</button>))}*/}

        {/* Bilder aus dem State rendern */}
        {this.state.images.map((image, index) => (
          <div key={index}>
          <img  src={image.src} alt={image.alt} />
          <p>{image.desc}</p>
          </div>
        ))}

        {}
      </div>
    )
  }
}
 