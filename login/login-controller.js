import { loginUser } from "./login-model.js";
import { session } from "../utils/session.js";

const { setAccessToken } = session();

export const loginController = (loginForm) => {
	loginForm.addEventListener('submit', (event) => {
		event.preventDefault();

		submitLogin(loginForm);
	});

	const submitLogin = async (loginForm) => {
		const { email, password } = getLoginData(loginForm);
		try {
			const jwt = await loginUser(email, password);
			setAccessToken(jwt)
			window.location = './index.html';
		} catch (error) {
			alert(error);
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
