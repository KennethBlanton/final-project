import React, { Component } from 'react';

class ImageDetail extends Component {

  // constructor (probs) {
  //   super(probs);
  // }

  componentDidMount () {
    fetch('http://circuslabs.net/~ryan.rodd/php/project16/api/?data=allimages')
      .then(response => {
        console.log("response", response);
        return response.json();
      })
      .then(data => {
        this.setState({
          images: data
      })
    })
  } 



  render() {

   	//const {images} = this.props;

    return (
      <div className = "image-detail">
      	IMAGE DETAIL


      </div>

    );
  }
}

export default ImageDetail;
