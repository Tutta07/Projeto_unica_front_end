
const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expression = {
    username: /^[a-zA-Z0-9\_\-]{4,16}$/,
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    address: /^[a-zA-Z0-9\_\-]{4,16}$/,

}
const fields = {
    username: false,
    name: false,
    password: false,
    email: false,
    address: false
}
const validateForm = (e) => {
	switch (e.target.name) {
		case "username":
			validateField(expresiones.username, e.target, 'username');
		break;
		case "name":
			validateField(expresiones.nombre, e.target, 'name');
		break;
		case "password":
			validateField(expresiones.password, e.target, 'password');
			validatePassword2();
		break;
		case "password2":
			validatePassword2();
		break;
		case "email":
			validateField(expresiones.email, e.target, 'email');
		break;
		case "address":
			validateField(expresiones.address, e.target, 'address');
		break;
	}
}
const validateField = (expresion, input, field) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${field}`).classList.remove('form-group-incorrecto');
		document.getElementById(`grupo__${field}`).classList.add('form-group-correcto');
		document.querySelector(`#grupo__${field} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${field} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${field} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		fields[field] = true;
	} else {
		document.getElementById(`grupo__${field}`).classList.add('form-group-incorrecto');
		document.getElementById(`grupo__${field}`).classList.remove('form-group-correcto');
		document.querySelector(`#grupo__${field} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${field} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${field} .formulario__input-error`).classList.add('formulario__input-error-activo');
		fields[field] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validateForm);
	input.addEventListener('blur', validateForm);
});
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(fields.user && fields.name && fields.password && fields.email && fields.address && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.form-group-correcto').forEach((icono) => {
			icono.classList.remove('form-group-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

