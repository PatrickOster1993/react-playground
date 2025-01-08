import React, { Component } from 'react';
import GlobalStyle
 from '../styles/global';
class DeletButton extends Component {
    handleClick = () => {
        const parentElement = this.buttonRef.closest(".frame");
        if (parentElement) {
            parentElement.remove();
        }

    };
       
    render() {
        return (
            <div>
                <GlobalStyle />
                <button ref={(ref) => (this.buttonRef = ref)} onClick={this.handleClick}>🗑️</button>
            </div>
        );
    }
}

export default DeletButton;