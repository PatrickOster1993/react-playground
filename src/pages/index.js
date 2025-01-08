// Importiert React und die Basisklasse Component, die für Klassenkomponenten verwendet wird.
import React, { Component } from "react"
// Importiert die navigate-Funktion von Gatsby, die für die Navigation zwischen Seiten verwendet wird.
import { navigate } from "gatsby"
// Importiert eine benutzerdefinierte Komponente, die in einem separaten Ordner definiert ist.
import CustomButton from "../components/customButton"
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
