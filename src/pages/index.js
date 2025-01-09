import React, { Component } from "react"
import GlobalStyle from "../styles/global"

// Importiere die Bilder direkt
import wuschl from "../images/keine_eule.jpg"
import musiker from "../images/musik_und_so.jpg"
import dahoam from "../images/dahoam_is_dahoam.png"

// Eigene Components
import Gallery from "../components/gallery"

const pictures = [
  { src: wuschl, alt: "Wuschl", desc: "Schöner Kater (keine Eule!)" },
  { src: musiker, alt: "Musiker", desc: "Schöner Musiker (keine Eule!)" },
  { src: dahoam, alt: "Dahoam", desc: "Schöner Ort (keine Eule!)" },
]

export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Gallery pics={pictures} />
      </div>
    )
  }
}
