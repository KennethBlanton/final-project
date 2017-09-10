import React, {Component} from 'react';

class Register extends Component {
	render(){
		
		return (
		
			<div>
				<title>Register</title> 

				<form action="http://circuslabs.net/~michele.james/build/php/handle_register.php?action=register" method="post">
					<label>First Name: </label>
					<input type="text" name="first_name" /><br />
					
					<label>Last Name: </label>
					<input type="text" name="last_name" /><br />
					
					<label>E-Mail Address: </label>
					<input type="email" name="email" /><br />
					
					<label>Password: </label>
					<input type="password" name="password"/><br />
					
					<label>Password (again): </label>
					<input type="password" name="password_again"/><br />
					
					<br />
					<button id="submit_button" type="submit" value="save">Save</button>
				</form>
			</div>				
		)
	}
}

export default Register;