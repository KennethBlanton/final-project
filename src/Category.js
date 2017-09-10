import React, { Component } from 'react';
import './App.css';

import {Link} from "react-router-dom";

class Category extends Component {

  constructor (probs) {
    super(probs);
  }

  render() {
  	const {images} = this.props;

    return (

      <div className = "category"> 
      	I'M A CAT/DOG CATEGORY!
  	      {images.map(image => (
  	      		<div key={image.id} className="gallery__image">

  	      			<Link to={`/image/${image.id}`}>
  	      				{image.title}<br/>
  	      			</Link>

  	      			<Link to={`/image/${image.id}`}>
  	      				{image.thumblink}<br/>
  	      			</Link>

  	      			{image.imagelink}<br/>
  	      			{image.description}<br/>
  	      			{image.thumblink}<br/>
  		      		<br/>
  	      		</div>
  	      	))}
      </div>

    );
  }
}

export default Category;
