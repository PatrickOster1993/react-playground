import React, { Component } from 'react';

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
                <button ref={(ref) => (this.buttonRef = ref)} onClick={this.handleClick}>🗑️</button>
            </div>
        );
    }
}

export default DeletButton;