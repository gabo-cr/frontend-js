import { createUser } from "./signup-model.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";
import { isEmailValid } from "../utils/formValidation.js";
import { loaderController } from "../loader/loader-controller.js";

export function signupController(signupForm) {
	const loader = signupForm.querySelector('#loader');
	const { showLoader, hideLoader } = loaderController(loader);

	signupForm.addEventListener('submit', (event) => {
		event.preventDefault();
		handleSignupFormSubmit(signupForm);
	});

	function handleSignupFormSubmit(signupForm) {
		let errors = [];

		const email = signupForm.querySelector('#email').value;
		if (!isEmailValid(email)) {
			errors.push('El email no tiene un formato correcto.')      
		}

		if (!arePasswordsEqual(signupForm)) {
			errors.push('Las contraseñas no son iguales.')
		}

		showFormErrors(errors);
	
		if (errors.length === 0) {
			signupUser(signupForm);
		}
	}

	function showFormErrors(errors) {
		for (const error of errors) {
			dispatchEvent('signup-notification', {
				message: error,
				type: 'error'
			}, signupForm);
		}
	}

	function arePasswordsEqual(signupForm) {
		const password = signupForm.querySelector('#password');
		const passwordConfirmation = signupForm.querySelector('#password-confirmation');
		return password.value === passwordConfirmation.value;
	}

	async function signupUser(signupForm) {
		const email = signupForm.querySelector('#email');
		const password = signupForm.querySelector('#password');

		try {
			showLoader();

			await createUser(email.value, password.value);
			
			dispatchEvent('signup-notification', {
				message: 'El usuario se registró correctamente.',
				type: 'success',
				autoRemove: true
			}, signupForm);
			
			setTimeout(() => {
				window.location = 'index.html';
			}, 2000);
		} catch (error) {
			dispatchEvent('signup-notification', {
				message: error,
				type: 'error'
			}, signupForm);
		} finally {
			hideLoader();
		}
	}
  
}
