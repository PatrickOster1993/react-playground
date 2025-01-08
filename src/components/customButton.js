import React, { Component } from "react"

// CustomButton ist eine Klasse, die von React.Component erbt.
// Sie implementiert den Lebenszyklus einer React-Komponente.
export default class CustomButton extends Component {
  constructor(props) {
    super(props)
    // Der Constructor wird als erstes aufgerufen, um den initialen Zustand (State) festzulegen.
    this.state = { clicked: false }
    console.log("1. Constructor: Initialisiert die Komponente.")
  }

  // Wird vor dem Rendern der Komponente aufgerufen.
  UNSAFE_componentWillMount() {
    console.log("2. componentWillMount: Vor dem ersten Rendern (Deprecated).")
  }

  // Wird direkt nach dem ersten Rendern aufgerufen. Hier kann man API-Aufrufe machen
  // oder andere Nebenwirkungen wie das Setzen von Timern starten.
  componentDidMount() {
    console.log("4. componentDidMount: Nach dem ersten Rendern.")
  }

  // Wird aufgerufen, bevor neue Props oder State zum Rendern führen.
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log(
      "5. componentWillUpdate: Vor dem Update der Komponente (Deprecated)."
    )
  }

  // Wird aufgerufen, nachdem ein Update abgeschlossen ist (neue Props oder State).
  // Hier kann man auf Änderungen reagieren, z. B. DOM-Manipulationen basierend auf neuen Daten.
  componentDidUpdate(prevProps, prevState) {
    console.log("7. componentDidUpdate: Nach dem Update.")
  }

  // Wird aufgerufen, bevor die Komponente aus dem DOM entfernt wird.
  // Ideal, um Ressourcen wie Timer, Event Listener oder Abonnements zu bereinigen.
  componentWillUnmount() {
    console.log("8. componentWillUnmount: Bevor die Komponente entfernt wird.")
  }

  // Methode, die bei einem Button-Klick ausgeführt wird.
  buttonClicked = () => {
    console.log("Button clicked!")
    // Setzt den State neu und löst ein Re-Rendering der Komponente aus.
    this.setState({ clicked: true })
  }

  // Diese Methode wird jedes Mal aufgerufen, wenn die Komponente neu gerendert wird.
  render() {
    console.log("3. (Mount) bzw. 6. (Update) render: Rendert die Komponente.")
    return <button onClick={this.buttonClicked}>My customized button</button>
  }
}
