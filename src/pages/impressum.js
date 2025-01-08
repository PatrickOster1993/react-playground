// Importiert React und die Basisklasse Component, die für Klassenkomponenten in React benötigt werden.
import React, { Component } from "react"
// Importiert globales Styling, um die gesamte Anwendung zu stylen.
import GlobalStyle from "../styles/global"

// Erstellt eine neue Klassenkomponente mit dem Namen "Impressum".
// Diese Komponente dient dazu, eine Impressum-Seite anzuzeigen.
export default class Impressum extends Component {
  // Die render-Methode ist notwendig, um festzulegen, was die Komponente im Browser anzeigt.
  render() {
    // Rückgabe von JSX: Ein einfacher <div>-Container mit einem Text für das Impressum.
    return (
      <div>
        <GlobalStyle />
        <h1>Mein persönliches Impressum ...</h1>
      </div>
    )
  }
}

// Der `export default` sorgt dafür, dass die Komponente exportiert wird,
// damit sie in anderen Dateien importiert und verwendet werden kann.
