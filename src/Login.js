import React, {Component} from 'react';

class Login extends Component {
	render(){
		
		return (
			<div>
				<form action="http://circuslabs.net/~michele.james/build/php/handle_login.php?action=login" method="post">
					<label>E-Mail Address: </label>
					<input type="text" name="email"/><br />
					<label>Password: </label>
					<input type="password" name="password"/><br />
					<br />
					<button type="submit" value="login">Login</button>
				</form>
			</div>	
		)
	}
}

export default Login;