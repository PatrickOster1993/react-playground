// Importiert React und die Basisklasse Component, die für Klassenkomponenten verwendet wird.
import React, { Component } from "react";

// Importiert globales Styling, um die gesamte Anwendung zu stylen.
import GlobalStyle from "../styles/global"// Importiert globales Styling, um die gesamte Anwendung zu stylen.
import burfdaybefore from "../images/burfdaybefore.jpg"
import burfdaypresent from "../images/burfdaypresent.jpg"
import ermagerd from "../images/ermagerd.jpg"
import finished from "../images/finished.jpg"
import Frog from "../images/Frog.jpg"
import mehr from "../images/mehr.jpg"
import MeRN from "../images/MeRN.jpg"
import nerdstuff from "../images/nerdstuff.jpg"
import Pancakes from "../images/Pancakes.jpg"
import whatisit from "../images/whatisit.jpg"

// Die Index-Klasse ist die Hauptseite der Anwendung. Sie wird beim Start geladen.
export default class Index extends Component {
  // Die render-Methode beschreibt, was die Komponente im Browser anzeigt.
  constructor(props){
    super(props)
    
    this.state = {
      images: [
        {src: burfdaybefore, alt: "got this last year", liked: false},
        {src: burfdaypresent, alt: "got that one this year", liked: false},
        {src: ermagerd, alt: "best cheesecake i ever had", liked: false},
        {src: finished, alt: "built a pc as a christmas surprise for a friend", liked: false},
        {src: Frog, alt: "cute", liked: false},
        {src: mehr, alt: "i really like to make those", liked: false},
        {src: MeRN, alt: "how i feel", liked: false},
        {src: nerdstuff, alt: "yes i got those", liked: false},
        {src: Pancakes, alt: "i really really like to make those", liked: false},
        {src: whatisit, alt: "did not figure this out yet", liked: false}

      ]
    }
  }

  
  toggleLikeButton = (index) => {
    // eine kopie von images machen 
    const update = [...this.state.images];
    // den status anhand des index ändern 
    update[index].liked = !update[index].liked;
    // die alte images im state überschreiben
    this.setState({images: update});
  };

  removeImage = (index) => {
    // create a new array with all elements that pass the "filter"-test where _ is a placeholder and i is the index
    const imageRemoval = this.state.images.filter((_, i) => i !== index);
    // just as in the toggle like button function i copy the newly generated list into the old ones place
    this.setState({ images: imageRemoval });
  };

  render() {
    return (
      <div>
        {/* GlobalStyle stellt globales Styling bereit */}
        <GlobalStyle />
        <div style={{ display: "flex", justifyContent: "center", width: "100%" , marginTop: "5vh"}}>
        <imageTitleCombo>
          {this.state.images.map((image, index) => (
              <section  key={index}>
                <div>
                  <p>{image.alt}</p>
                </div>
                <imageContainer>
                  <img height="200px" src={image.src} alt={image.alt}/>
                </imageContainer>
                <buttonList>
                  <button onClick={() => this.toggleLikeButton(index)}>
                    {image.liked ? "❤️" : "🩶"}
                  </button>
                  <button onClick={() => this.removeImage(index)}>
                  🗑️
                  </button>
                </buttonList>
              </section>
              
          ))}

        </imageTitleCombo>
        </div>
      </div>
    )
  }
}
