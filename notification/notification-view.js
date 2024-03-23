function mapType(type) {
	let classType = 'info';
	if (type === 'success') {
		classType = 'success';
	} else if (type === 'error') {
		classType = 'danger';
	}
	return classType;
}

export function buildNotification(message, type) {
	const typeClass = mapType(type);
	return `<div class="alert alert-${typeClass}" role="alert">${message}</div>`;
}
