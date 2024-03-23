export function isEmailValid(email) {
	const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
	return emailRegExp.test(email);
}
