const validator = require('validator')

module.exports.signup = (username, password, email) => {
	const errors = {};
	if (username === ''){
		errors["username"] = "Username cannot be blank";
		}
	if(email === ''){
		errors["email"] = "Email cannot be blank"
	}
	if (!validator.isEmail(email)){
		errors["email"] = "Not a valid email address";
	}
	if(password === ''){
		errors["password"] = "Password cannot be blank";	
		}
	if(!validator.isAscii(password)){
		errors["password"] = "Not a valid password";	
		}
	if(!validator.isLength(password, {min:4, max: 12})){
		errors["password"] = "Ensure that your password has a minimum of 4 characters and maximum of 12 characters";	
	}
    return{
        errors,
        valid: Object.keys(errors).length < 1
    }
}