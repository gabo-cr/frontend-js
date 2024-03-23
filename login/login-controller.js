import { loginUser } from "./login-model.js";
import { session } from "../utils/session.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";
import { isEmailValid } from "../utils/formValidation.js";

const { setAccessToken } = session();

export const loginController = (loginForm) => {
	loginForm.addEventListener('submit', (event) => {
		event.preventDefault();
		handleLoginFormSubmit(loginForm);
	});

	const handleLoginFormSubmit = (loginForm) => {
		let errors = [];

		const email = loginForm.querySelector('#email').value;
		if (!isEmailValid(email)) {
			errors.push('El email no tiene un formato correcto.')      
		}

		showFormErrors(errors);
		
		if (errors.length === 0) {
			signinUser(loginForm);
		}
	};

	const showFormErrors = (errors) => {
		for (const error of errors) {
			dispatchEvent('login-notification', {
				message: error,
				type: 'error'
			}, loginForm);
		}
	};

	const signinUser = async (loginForm) => {
		const { email, password } = getLoginData(loginForm);
		try {
			const jwt = await loginUser(email, password);
			setAccessToken(jwt);

			dispatchEvent('login-notification', {
				message: 'Has iniciado sesión correctamente.',
				type: 'success',
				autoRemove: true
			}, loginForm);

			setTimeout(() => {
				window.location = 'index.html';
			}, 1000);
		} catch (error) {
			dispatchEvent('login-notification', {
				message: error,
				type: 'error'
			}, loginForm);
		}
	};
  
	const getLoginData = (loginForm) => {
		const formData = new FormData(loginForm);
		const email = formData.get('email');
		const password = formData.get('password');
	
		return {
			email: email,
			password: password
		}
	};
}
