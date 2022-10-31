// Menu

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.listaInicio');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('listaInicio_visible');

    // le asignamos un texto reproducible a la acción
    
    if(navMenu.classList.contains('listaInicio_visible')){
        navToggle.setAttribute('aria-label', 'Cerrar menú');
    } else {
        navToggle.setAttribute('aria-label', 'Abrir menú');
    }

} );



// Formulario

const formulario = document.querySelector('#formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /[a-zA-ZÀ-ÿ\s]{3,40}$/,
	correo: /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 
	telefono: /\d{8,14}$/ 
    /*mensaje: /[a-zA-ZÀ-ÿ0-9-_.\s]{1,80}$/*/
}

const campos = {
    usuario: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-correcto');
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.remove('formulario-input-error-activo');
        campos[campo] = true;
    } else{
        document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-correcto');
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.add('formulario-input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario); 
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
      

    if(campos.nombre && campos.correo && campos.telefono) {
        formulario.reset();

        document.getElementById('formulario-mensaje-ok').classList.add('formulario-mensaje-ok-activo');
        setTimeout(() => {
            document.getElementById('formulario-mensaje-ok').classList.remove('formulario-mensaje-ok-activo');
        }, 5000);

        document.querySelectorAll('.formulario-grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario-grupo-correcto');
        });

    } else{
        document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario-mensaje').classList.remove('formulario-mensaje-activo');
        }, 3000);
    }
});