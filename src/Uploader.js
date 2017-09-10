import React, { Component } from 'react';

class Uploader extends Component {

  constructor (probs) {
    super(probs);
  }
  // componentDidMount() {
  //   document.querySelector('form').setAttribute('enctype',"multipart/form-data");
  // }

  render() {


    return (

      <div className = "uploader"> 
      	UPLOADER PLACEHOLDER
      </div>

    );
  }
}

export default Uploader;

// I'm an uploader:

//         <br />
//         <br />
    
//         <form id="uploadForm" method="post" enctype="multipart/form-data" action="../php/handle_file_uploader.php">
//           <label>File to upload: </label>
//           <input type="file" name="file" id="file" /><br />

//           <label>Titel: </label>
//           <input type="text" name="name" id="name" /><br />

//           <label>Description: </label>
//           <input type="text" name="description" id="description"/><br />

//           <select type="text" name="category">
//             <option value="dog">Dog</option>
//             <option value="cat">Cat</option>
//           </select>
//           <br />
//           <button type="submit" value="upload" id="uploadButton">Upload</button>
//           <p id="resultMessage"></p>
//         </form>
