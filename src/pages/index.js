import React, { Component } from "react"
import GlobalStyle from "../styles/global"

// Importiere die Bilder direkt
import wuschl from "../images/keine_eule.jpg"
import musiker from "../images/musik_und_so.jpg"
import dahoam from "../images/dahoam_is_dahoam.png"

export default class Index extends Component {
  constructor(props) {
    super(props)
    // Speichere die Bilder im State
    this.state = {
      images: [
        { src: wuschl, alt: "Wuschl", desc: "Schöner Kater (keine Eule!)" },
        { src: musiker, alt: "Musiker", desc: "Schöner Musiker (keine Eule!)" },
        { src: dahoam, alt: "Dahoam", desc: "Schöner Ort (keine Eule!)" },
      ],
    }
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        {/* Bilder aus dem State rendern */}
        {this.state.images.map((image, index) => (
          <div>
            <img key={index} src={image.src} alt={image.alt} />
            <p>{image.desc}</p>
          </div>
        ))}
      </div>
    )
  }
}
