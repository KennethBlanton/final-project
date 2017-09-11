import React, { Component } from 'react';
import Gallery from './Gallery';

class ImageDetail extends Component {

  constructor (props) {
    super(props);

    this.state = {
      images: []
    }
  }

  componentDidMount () {
    fetch('http://circuslabs.net/~michele.james/build/php/handle_fetch.php?type=gallery',{

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                 'Accept': 'application/json',
            },
        })
        .then( response => response.json())
        .then(json => (
        
           this.setState({
            data:json,
           })
          
        ));
  } 



  render() {

   	//const {images} = this.props;

    return (
      <div className = "image-detail">

      <ul>
        {this.state.data.map(item =>
              <Gallery key={item.id} {...item} />)}
      </ul>

      </div>

    );
  }
}

export default ImageDetail;
