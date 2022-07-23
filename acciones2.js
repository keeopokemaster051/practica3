(function(){
	var formulario = document.getElementById('formulario')
	nombre = formulario.nombre,
	correo = formulario.correo,
	genero = formulario.genero,
	terminos = formulario.terminos,
	error = document.getElementById('error')
	function validarNombre(e){
		if (nombre.value == '' || nombre.value == null) {
			console.log('Por favor completa el nombre');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el nombre</li>'
			e.preventDefault();
		}
		else{
			error.style.display = 'none';
		}
	}
	function validarCorreo(e){
		if (correo.value == '' || correo.value == null) {
		console.log('Por favor completa el correo');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el correo</li>'
			e.preventDefault();
		}
		else{
			error.style.display = 'none';	
		}
	}
	function validargenero(e){
		if (genero.value == '' || genero.value == null) {
		console.log('Por favor completa el genero');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el genero</li>'
			e.preventDefault();
		}
		else{
			error.style.display = 'none';
		}
	}
	function validarterminos(e){
		if (terminos.checked == false) {
		console.log('Por favor acepta los terminos');
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor acepta los terminos</li>'
			e.preventDefault();
		}
		else{
			error.style.display = 'none';
		}
	}
	function validarformulario(e){
		error.innerHTML = '';
		validarNombre(e);
		validarCorreo(e);
		validargenero(e);
		validarterminos(e);
	}
	formulario.addEventListener('submit',validarFormulario);
}())