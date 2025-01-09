import React from "react"

const Picture = (props) => {
  return (
    <div className="picture">
      <p>{props.desc}</p>
      <img src={props.src} alt={props.alt} />
      <button
        onClick={props.toggleLike} // Aufruf der Funktion, die den Like-Status ändert
        style={{
          backgroundColor: props.like ? "green" : "white", // Dynamische Farbe je nach Zustand
        }}
      >
        ❤️
      </button>
    </div>
  )
}

export default Picture
