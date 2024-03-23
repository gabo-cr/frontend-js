export function buildNavbar() {
	return `
	<header class="navbar d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
		<a href="/index.html" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
			<span class="fs-4">Ballapop</span>
		</a>
		<ul class="nav nav-pills">
			<li class="nav-item"><a href="/login.html" class="btn btn-outline-primary mx-2">Iniciar sesión</a></li>
			<li class="nav-item"><a href="/signup.html" class="btn btn-primary">Registrarse</a></li>
		</ul>
	</header>
	`;
}

export function buildAuthenticatedNavbar() {
	return `
	<header class="navbar d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
		<a href="/index.html" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
			<span class="fs-4">Ballapop</span>
		</a>
		<ul class="nav nav-pills">
			<li class="nav-item"><a href="/ad-creation.html" class="btn btn-primary mx-2">Crear anuncio</a></li>
			<li class="nav-item"><button id="btn-logout" class="btn btn-outline-primary">Cerrar sesión</button></li>
		</ul>
	</header>
	`;
}
