// Importiert React und die Basisklasse Component, die für Klassenkomponenten verwendet wird.
import React, { Component } from "react"
// Importiert die navigate-Funktion von Gatsby, die für die Navigation zwischen Seiten verwendet wird.
import { navigate } from "gatsby"
// Importiert eine benutzerdefinierte Komponente, die in einem separaten Ordner definiert ist.
import CustomButton from "../components/customButton"
// Importiert globale CSS-Stile, um die gesamte Anwendung zu stylen.
import GlobalStyle from "../styles/global"

// Die Index-Klasse ist die Hauptseite der Anwendung. Sie wird beim Start geladen.
export default class Index extends Component {
  // Der Konstruktor initialisiert die Komponente.
  constructor(props) {
    super(props) // Ruft den Konstruktor der übergeordneten Klasse (Component) auf.
  }

  // Die render-Methode beschreibt, was die Komponente im Browser anzeigt.
  render() {
    return (
      <div>
        {/* GlobalStyle stellt globale CSS-Stile bereit */}
        <GlobalStyle />

        {/* CustomButton ist eine benutzerdefinierte Komponente, die separat definiert wurde */}
        <CustomButton />

        {/* Button mit einem onClick-Handler, der die navigate-Funktion von Gatsby verwendet, 
            um zur Impressum-Seite zu navigieren */}
        <button onClick={() => navigate("/impressum")}>
          Impressum besuchen!
        </button>
      </div>
    )
  }
}
