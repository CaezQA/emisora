// Programa: Encuesta de gustos musicales - Emisora
// Autor: Victor con ayuda de ChatGPT
// Lenguaje: JavaScript

// Estructura de datos
let personas = [];

// Función para agregar una persona
function agregarPersona() {
    if (personas.length >= 6) {
        console.log("⚠️ No se pueden registrar más personas (máximo 6).");
        return;
    }

    let persona = {};

    persona.nombre = prompt("Ingrese el nombre:");
    persona.cedula = prompt("Ingrese la cédula:");
    persona.fechaNacimiento = prompt("Ingrese la fecha de nacimiento (DD/MM/AAAA):");
    persona.correo = prompt("Ingrese el correo electrónico:");
    persona.ciudadResidencia = prompt("Ingrese la ciudad de residencia:");
    persona.ciudadOrigen = prompt("Ingrese la ciudad de origen:");

    // Canciones favoritas (máximo 3)
    persona.canciones = [];
    for (let i = 0; i < 3; i++) {
        let agregar = confirm(`¿Desea ingresar la canción favorita #${i + 1}?`);
        if (!agregar) break;

        let cancion = {};
        cancion.artista = prompt(`Ingrese el nombre del artista de la canción #${i + 1}:`);
        cancion.titulo = prompt(`Ingrese el título de la canción #${i + 1}:`);
        persona.canciones.push(cancion);
    }

    personas.push(persona);
    console.log("✅ Persona registrada con éxito.");
}

// Función para mostrar una persona por posición
function mostrarPersona() {
    if (personas.length === 0) {
        console.log("⚠️ No hay personas registradas aún.");
        return;
    }

    let posicion = parseInt(prompt(`Ingrese la posición (0 a ${personas.length - 1}):`));
    if (posicion < 0 || posicion >= personas.length || isNaN(posicion)) {
        console.log("❌ Posición inválida.");
        return;
    }

    let persona = personas[posicion];
    console.log("📌 Información de la persona:");
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Cédula: ${persona.cedula}`);
    console.log(`Fecha de Nacimiento: ${persona.fechaNacimiento}`);
    console.log(`Correo: ${persona.correo}`);
    console.log(`Ciudad de Residencia: ${persona.ciudadResidencia}`);
    console.log(`Ciudad de Origen: ${persona.ciudadOrigen}`);
    console.log("🎵 Canciones favoritas:");
    persona.canciones.forEach((c, i) => {
        console.log(`   ${i + 1}. ${c.artista} - "${c.titulo}"`);
    });
}

// Menú principal
function menu() {
    let opcion;
    do {
        opcion = prompt(
            "=== MENÚ PRINCIPAL ===\n" +
            "1. Agregar persona\n" +
            "2. Mostrar persona por posición\n" +
            "3. Salir\n" +
            "Seleccione una opción:"
        );

        switch (opcion) {
            case "1":
                agregarPersona();
                break;
            case "2":
                mostrarPersona();
                break;
            case "3":
                console.log("👋 Programa finalizado.");
                break;
            default:
                console.log("❌ Opción no válida.");
        }
    } while (opcion !== "3");
}

// Ejecutar el menú
menu();