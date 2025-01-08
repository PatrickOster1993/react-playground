// Importiert React und die Basisklasse Component, die für Klassenkomponenten verwendet wird.
import React, { Component } from "react";

// Importiert globales Styling, um die gesamte Anwendung zu stylen.
import GlobalStyle from "../styles/global";

// Importiert die PhotoGrid-Komponente
import PhotoGrid from "../components/rahmen"; 

// Importiert die Fotos
import schiff from "../images/schiff.jpg";
import surferboy from "../images/surferboy.jpg";
import essen from "../images/essen.jpg";
import bill from "../images/bill_kaulitz_frisur.jpg";
import gecko from "../images/gecko.jpg";
import hoehlen from "../images/hoehlen.jpg";
import jeans from "../images/jeans.jpg";
import schlucht from "../images/schlucht_stein.jpg";
import sleipnir from "../images/sleipnir.jpg";
import styler from "../images/styler.jpg";


// Die Index-Klasse ist die Hauptseite der Anwendung. Sie wird beim Start geladen.
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { src: schiff, alt: "Schiff", desc: "Gestrandetes Schiff in Zypern" },
        { src: surferboy, alt: "Surferboy", desc: "Damals als Surfer unterwegs gewesen" },
        { src: essen, alt: "Essen", desc: "Essen wie ein Großer" },
        { src: bill, alt: "bill", desc: "Jugendsünde" },
        { src: gecko, alt: "gecko", desc: "Künstler und sein Meisterwerk" },
        { src: hoehlen, alt: "hoehlen", desc: "Wasserhöhlen in Zypern" },
        { src: jeans, alt: "jeans", desc: "Der Jeans-Style geht immer" },
        { src: schlucht, alt: "schlucht", desc: "Ein Felsen in einer Schlucht (Zypern)" },
        { src: sleipnir, alt: "sleipnir", desc: "Mein Pferdchen </3" },
        { src: styler, alt: "styler", desc: "Schon immer Stylisch unterwegs" },
      ],
    };
  }

  // Die render-Methode beschreibt, was die Komponente im Browser anzeigt.
  render() {
    return (
      <div>
        {/* GlobalStyle stellt globales Styling bereit */}
        <GlobalStyle />

        {/* Verwendung der PhotoGrid-Komponente */}
        <PhotoGrid photos={this.state.images} />
      </div>
    );
  }
}
