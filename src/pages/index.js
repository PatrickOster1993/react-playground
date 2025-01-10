import React, { Component } from "react"
import GlobalStyle from "../styles/global"

// Importiere die Bilder direkt
import colanase from "../images/colanase.jpg"
import kinder from "../images/kinder.jpg"
import bordercolour from "../images/bordercolour.jpg"
import cgrid from "../images/C++grid.png"
import computersagtnein from "../images/ComputerSagtNein.jpg"
import kackklammern from "../images/kackklammern.jpg"
import ninspiel from "../images/Ninspiel.png"
import ohno from "../images/ohno.png"
import rasPi from "../images/rasPi.png"
import rehgips1 from "../images/rehgips1.jpg"

// Eigene Components
import Gallery from "../components/gallery"

const pictures = [
  { src: colanase, alt: "Colanase", desc: "1"},
  { src: kinder, alt: "Kinder", desc: "2" },
  { src: bordercolour, alt: "Bordercolour", desc: "3" },
  { src: cgrid, alt: "Cgrid", desc: "4" },
  { src: computersagtnein, alt: "Computersagtnein", desc: "5" },
  { src: kackklammern, alt: "kackklammern", desc: "6" },
  { src: ninspiel, alt: "ninspiel", desc: "7" },
  { src: ohno, alt: "ohno", desc: "8" },
  { src: rasPi, alt: "rasPi", desc: "9" },
  { src: rehgips1, alt: "rehgips1", desc: "23" }
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
