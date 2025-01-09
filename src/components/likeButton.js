import React, { Component } from 'react';
import GlobalStyle from '../styles/global';

class LikeButton extends Component {
    constructor(props){
        super(props);
        this.state = {liked: false};
    }
    
    handleClick = () => {
        this.setState((prevState) => ({
            liked: !prevState.liked
        }));
    };

    render() {
        return (
            <div>
                <GlobalStyle></GlobalStyle>
                <button onClick={this.handleClick} style={{color: this.state.liked ? "red" : "black"}}>♥</button>
                
            </div>
        );
    }
}

export default LikeButton;