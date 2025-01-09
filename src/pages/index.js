import React, { Component } from "react"
import GlobalStyle from "../styles/global"

// Importiere die Bilder direkt
import wuschl from "../images/keine_eule.jpg"
import musiker from "../images/musik_und_so.jpg"
import dahoam from "../images/dahoam_is_dahoam.png"
import blondie from "../images/blond_und_so.jpg"
import löwe from "../images/einmal_loewe_immer_loewe.jpg"
import skater from "../images/hals_und_beinbruch.jpg"
import boy from "../images/lang_ists_her.png"
import mode from "../images/modegeschmack_pur.jpg"
import sis from "../images/schwester_und_ich.jpg"
import au from "../images/traumhaft_schoen.png"

// Eigene Components
import Gallery from "../components/gallery"

const pictures = [
  { src: wuschl, alt: "Wuschl", desc: "Schöner Kater" },
  { src: musiker, alt: "Musiker", desc: "Schöner Musiker" },
  { src: dahoam, alt: "Schloss", desc: "Schönes Schloss" },
  { src: blondie, alt: "Blond", desc: "Schöne Frisur" },
  { src: löwe, alt: "1860", desc: "Schöner Verein" },
  { src: skater, alt: "Sk8er", desc: "Schöner Trick" },
  { src: boy, alt: "Boy", desc: "Schöner Boy" },
  { src: mode, alt: "Mode", desc: "Schöne Hose" },
  { src: sis, alt: "Sis", desc: "Schönes Bild" },
  { src: au, alt: "Österreich", desc: "Schöner Ort" },
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
