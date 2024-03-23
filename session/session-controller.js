export function sessionController() {

	function validateAuthentication() {
		if (!isUserLoggedIn()) {
			window.location.href = 'index.html';
		}
	}
	
	function isUserLoggedIn() {
		return localStorage.getItem('access-token');
	}

	function logout() {
		localStorage.removeItem('access-token');
	}

	return {
		validateAuthentication,
		isUserLoggedIn,
		logout
	}
}
