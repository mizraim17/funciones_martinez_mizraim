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
		this.telefono = telefono;
		this.sueldo = sueldo;
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
	let dineroPrestar = prompt("Dinero Solicitado");
	let tiempoPagar = prompt("En cuánto tiempo se cubrirá el crédito (meses) ");
	let credito = prompt("Creditos activos");

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
		"Bienvenido, seleccione una opción (ESC para salir)\n1. Calcular crédito  \n2.Ver Datos introducidos \n 3.- Para salir "
	);
	return OPCION;
};

let menu = () => {
	let opcion = instrucciones();

	while (opcion != "3") {
		if (opcion != "") {
			opcion = parseInt(opcion);
			if (!isNaN(opcion)) {
				switch (opcion) {
					case 1:
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

						interesTotal = Math.round(
							datosCliente.dineroPrestar * 0.01 +
								datosCliente.credito * (datosCliente.dineroPrestar * 0.01) +
								datosCliente.tiempoPagar * (datosCliente.dineroPrestar * 0.05)
						);

						totalPagar = parseInt(datosCliente.dineroPrestar) + interesTotal;
						// debugger;

						if (datosCliente.edad < 18) {
							alert("No se aprobó el crédito porque eres menor de edad");
						}
						// else if (datosCliente.sueldo < datosCliente.dineroPrestar) {

						// 	alert("No se aprobó el crédito porque no tienes solvencia");
						else {
							alert(
								"Estimado " +
									datosCliente.nombre +
									" tu crédito se aprobó por " +
									datosCliente.dineroPrestar +
									"pesos y al final pagarias l " +
									totalPagar +
									" pesos"
							);
						}

						break;

					case 2:
						alert(
							"Tus datos son:\n" +
								"Nombre: " +
								datosCliente.nombre +
								"\nEdad: " +
								datosCliente.edad +
								"\nTélefono: " +
								datosCliente.telefono +
								"\nSueldo: " +
								datosCliente.sueldo +
								"\nDinero Solicitado: " +
								datosCliente.dineroPrestar +
								"\nTiempo para liquidar " +
								datosCliente.tiempoPagar +
								" meses"
						);
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
		opcion = instrucciones();
	}
};

let datosCliente = obtenerDatos();

menu();
