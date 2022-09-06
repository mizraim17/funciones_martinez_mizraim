class Persona {
	constructor(
		nombre,
		edad,
		telefono,
		sueldo,
		credito,
		dineroPrestar,
		tiempoPagar
	) {
		this.nombre = nombre;
		this.edad = edad;
		this.precioVenta = telefono;
		this.telefono = sueldo;
		this.credito = credito;
		this.dineroPrestar = dineroPrestar;
		this.tiempoPagar = tiempoPagar;
	}
}

let obtenerDatos = () => {
	let nombre = prompt("Ingresa el Nombre  ");
	let edad = prompt("Ingresa la Edad");
	let telefono = prompt("Ingresa Teléfono");
	let sueldo = prompt("Ingresa Sueldo");
	let credito = prompt("Creditos activos");
	let dineroPrestar = prompt("Dinero a prestar");
	let tiempoPagar = prompt("En cuánto tiempo se cubrirá el crédito (meses) ");

	const objetoCliente = new Persona(
		nombre,
		edad,
		telefono,
		sueldo,
		credito,
		dineroPrestar,
		tiempoPagar
	);

	return objetoCliente;
};

let instrucciones = () => {
	const OPCION = prompt(
		"Bienvenido, seleccione una opción (ESC para salir)\n1. Crear perfil  \n2.  Calcular Datos \n pulsa q para salir "
	);
	return OPCION;
};

let menu = () => {
	let opcion = instrucciones();

	console.log("opcion", opcion);

	while (opcion?.toLowerCase() != "s") {
		if (opcion != "") {
			opcion = parseInt(opcion);
			if (!isNaN(opcion)) {
				switch (opcion) {
					case 1:
						let datosCliente = obtenerDatos();

						if (datosCliente.tiempoPagar < 6) {
							interesTiempo = 3 * (datosCliente.dineroPrestar / 1.1);
						} else if (
							datosCliente.tiempoPagar > 6 &&
							datosCliente.tiempoPagar < 24
						) {
							interesTiempo = 6 * (datosCliente.dineroPrestar / 1.1);
						} else if (datosCliente.tiempoPagar > 24) {
							interesTiempo = 12 * (datosCliente.dineroPrestar / 1.1);
						}

						creditoAprobado =
							datosCliente.dineroPrestar - datosCliente.dineroPrestar / 1.1;

						interesTotal =
							datosCliente.dineroPrestar / 1.1 +
							datosCliente.credito * (datosCliente.dineroPrestar / 1.1) +
							datosCliente.tiempoPagar;

						alert(
							"Querido " +
								datosCliente.nombre +
								" tu crédito se aprobo por " +
								creditoAprobado +
								" con el siguiente interes " +
								interesTotal
						);

						break;

					case 2:
						console.log(datosCliente.dineroPrestar);

						break;

					default:
						alert("Opcion Incorrecta");
						break;
				}
			} else {
				alert("Ingresó una letra");
			}
		} else {
			alert("Seleccione la opción");
		}
		// opcionSeleccionada = instrucciones();
	}
};

menu();
