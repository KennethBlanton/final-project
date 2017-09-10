import React, { Component } from 'react';

//import {Link} from "react-router-dom";

class ImageCollection extends Component {

  // constructor (probs) {
  //   super(probs);
  // }

  render() {

  	//const {images} = this.props;

    return (
      <div className = "gallery">
      IMAGE GALLERY:
      
      </div>

    );
  }
}

export default ImageCollection;

// {images.map(image => (
//           <div key={image.id} className="gallery__image">

//             <Link to={`/image/${image.id}`}>
//               {image.title}<br/>
//             </Link>

//             <Link to={`/image/${image.id}`}>
//               {image.thumblink}<br/>
//             </Link>

//             {image.imagelink}<br/>
//             {image.description}<br/>
//             {image.thumblink}<br/>
//             <br/>
//           </div>
//         ))}
