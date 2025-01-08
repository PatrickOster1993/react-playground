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

export default class Index extends Component {
  constructor(props) {
    super(props)
    // Speichere die Bilder im State
    this.state = {
      images: [
        { src: colanase, alt: "Colanase" },
        { src: kinder, alt: "Kinder" },
        { src: bordercolour, alt: "Bordercolour" },
        { src: cgrid, alt: "Cgrid" },
        { src: computersagtnein, alt: "Computersagtnein" },
        { src: kackklammern, alt: "kackklammern" },
        { src: ninspiel, alt: "ninspiel" },
        { src: ohno, alt: "ohno" },
        { src: rasPi, alt: "rasPi" },
        { src: rehgips1, alt: "rehgips1" }
      ],
    }
  }

  myObject = {
    name: "patrick",
    alter: 18,
    beruf: {
      haupt: "bürgergeldempfänger",
      neben: "millionär"
    },

    hobbys: [
      "skaten", "musik", "nodes versenden"
    ]
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        {/* Bilder aus dem State rendern */}

        

        {this.state.images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}

        {console.log(this.state.images[0].alt)}

      </div>
    )
  }
}