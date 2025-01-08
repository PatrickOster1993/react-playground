import React, { Component } from "react"
import GlobalStyle from "../styles/global"

// Die Error-Klasse ist eine React-Komponente, die von der Basisklasse Component erbt.
// Sie wird verwendet, um eine einfache Fehleranzeige zu rendern.
class Error extends Component {
  // Die render-Methode ist eine der wichtigsten Methoden in einer React-Klasse.
  // Sie beschreibt, was die Komponente im Browser anzeigen soll.
  render() {
    // Rückgabe von JSX: Ein einfacher `div`, der eine Fehlermeldung anzeigt.
    return (
      <div>
        <GlobalStyle />
        <p>Error 404 ...</p>
      </div>
    )
  }
}

// Die Komponente wird exportiert, damit sie in anderen Dateien verwendet werden kann.
// Durch den `default`-Export kann sie mit einem beliebigen Namen importiert werden.
export default Error
