import React, { Component } from "react"

class Picture extends Component {
  constructor(props) {
    super(props)
    this.state = {
      like: false, // Initialzustand
    }
  }

  toggleLike = () => {
    // Den Zustand umkehren (true <-> false)
    this.setState((prevState) => ({
      like: !prevState.like,
    }))
  }

  render() {
    return (
      <div>
        <p>{this.props.desc}</p>
        <img src={this.props.src} alt={this.props.alt} />
        {/* Dynamisches Styling je nach Zustand */}
        <button
          onClick={this.toggleLike}
          style={{
            backgroundColor: this.state.like ? "green" : "white",
          }}
        >
          ❤️
        </button>
      </div>
    )
  }
}

export default Picture
