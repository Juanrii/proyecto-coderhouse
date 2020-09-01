/** Objeto Form */
var form = new Object();

/** Cambiar titulo desde JS */
form.calculadoraTitulo = document.getElementById("calculadoraTitulo");
let titulo = form.calculadoraTitulo.innerText = "Calculadora de Prestamos";

/** Propiedades del objeto form */
form.nombreApellido     = document.getElementById("nombreApellido");
form.dni                = document.getElementById("dni");
form.domicilio          = document.getElementById("domicilio");
form.monto              = document.getElementById("monto");
form.ciudad             = document.getElementById("ciudad");
form.plan               = document.getElementById("plan");
form.descripcion        = document.getElementById("descripcion");
form.calcular           = document.getElementById("calcular")


function obtenerMonto() {
    return parseInt(form.monto.value);
}

const mostrarDatos = (e) => {
    console.log(
    "\nNombre y Apellido: " + form.nombreApellido.value + 
    "\nDNI: " + form.dni.value + 
    "\nDomicilio: " + form.domicilio.value + 
    "\nMonto: " + obtenerMonto() + 
    "\nCiudad: " + form.ciudad.value + 
    "\nPlan: " + form.plan.value + 
    "\nDescripcion: " + form.descripcion.value);
}

// form.addEventListener('submit', event => {
//     event.preventDefault();
//     const search = document.getElementById('form');
//     console.log(search.value);
// })

var formulario = document.getElementById("form");
