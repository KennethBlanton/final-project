import React, { Component } from 'react';
import Gallery from './Gallery';

export default class Category extends Component {
  constructor(props) {
    super(props);

        var tempJSON = JSON.parse('[{"id":"60","title":"farm","description":"farm","imagelink":"\/home\/michele.james\/public_html\/build\/php\/user_uploads\/farm-tractor.jpeg","thumblink":null,"username":"test@test.com","score":"0","date":"2017-09-10 01:48:14","category":"cat"},{"id":"61","title":"home","description":"home","imagelink":"\/home\/michele.james\/public_html\/build\/php\/user_uploads\/home.png","thumblink":null,"username":"test@test.com","score":"0","date":"2017-09-10 01:48:34","category":"dog"}]');

    this.state = {
      test: 'hi',
      data: tempJSON,
    }
  }

  componentDidMount() {
    fetch('http://circuslabs.net/~michele.james/build/php/handle_fetch.php?type=categoryPage',{

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                 'Accept': 'application/json',
            },
        })
        .then( response => response.json())
        .then(json => {
          console.log(JSON.parse(json));
          console.log('check');
          var newJSON = JSON.parse(json);
          
        })
          // console.log(tempJSON);
          // this.setState({
          //  data: tempJSON,
          // })
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
