import React, { Component } from 'react';
import Gallery from './Gallery';

export default class GalleryPage extends Component {
	constructor(props) {
		super(props);



		this.state = {
			test: 'hi',
			data: ['temps'],
		}
	}

  componentDidMount() {
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
		const {data} = this.state;
		console.log(this.state.data);
		return(
			<ul>
				{this.state.data.map(item =>
	            <Gallery key={item.id} {...item} />)}
			</ul>
		);
	}
}
