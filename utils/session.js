export function session() {

	function validateAuthentication() {
		if (!isUserLoggedIn()) {
			window.location.href = 'index.html';
		}
	}

	function getAccessToken() {
		return localStorage.getItem('access-token');
	}

	function setAccessToken(token) {
		localStorage.setItem('access-token', token);
	}
	
	function isUserLoggedIn() {
		return getAccessToken() ? true : false;
	}

	function logout() {
		localStorage.removeItem('access-token');
	}

	return {
		validateAuthentication,
		getAccessToken,
		setAccessToken,
		isUserLoggedIn,
		logout
	}
}
