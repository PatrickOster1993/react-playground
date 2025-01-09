import React, { Component } from 'react';


class Searchfunction extends Component {
    
  constructor(props){
    super(props)

    
    this.state = {
    inputValue: ""
    }
  }
    handleSearch = (action) => {
        const refreshedInputValue = action.target.value;
        this.setState({inputValue: action.target.value});

        
        if (refreshedInputValue !== "" ){
            const filteredPictures = this.props.images.filter((image) =>
            image.alt.toLowerCase().includes(refreshedInputValue.toLowerCase()));
            this.props.updateFilteredImages(filteredPictures);
        }
        else{
            this.props.updateFilteredImages(this.props.originalImages)
        }
    }
    
    render() {
        return (
            <input
            value = {this.state.inputValue}
            onChange = {this.handleSearch}
            placeholder = "Enter search words..."
            />
        )
    }
}

export default Searchfunction;