// Importiert React und die Basisklasse Component, die für Klassenkomponenten verwendet wird.
import React, { Component } from "react"

// Importiert globales Styling, um die gesamte Anwendung zu stylen.
import GlobalStyle from "../styles/global"

// Die Index-Klasse ist die Hauptseite der Anwendung. Sie wird beim Start geladen.
export default class Index extends Component {
  // Die render-Methode beschreibt, was die Komponente im Browser anzeigt.
  render() {
    return (
      <div>
        {/* GlobalStyle stellt globales Styling bereit */}
        <GlobalStyle />
      </div>
    )
  }
}
