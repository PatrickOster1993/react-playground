import React, { Component } from 'react';
import GlobalStyle from "../styles/global"// Importiert globales Styling, um die gesamte Anwendung zu stylen.

class ToastDeleteMessage extends Component {
  handleOkClick = () => {
    this.props.onOkClick();  // Calls the onOkClick method passed as a prop
    this.props.toast.dismiss(); // Dismiss the toast after confirmation
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <GlobalStyle/>
        <span>Löschen bestätigen</span>
        <divider />
        <div>
            <button onClick={this.handleOkClick} style={{background: "green",}}>
            OK
            </button>
        </div>
      </div>
    );
  }
}

export default ToastDeleteMessage;


