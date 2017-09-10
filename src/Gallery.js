import React, { Component } from 'react';

export default class Sidebar extends Component {

	render(){
		return(

			<div>
				<h1>{this.props.description}</h1>
				<h1>{this.props.category}</h1>
				<h1>{this.props.id}</h1>
				<h1>{this.props.imageLink}</h1>
				<h1>{this.props.date}</h1>
			</div>



		)}



 }