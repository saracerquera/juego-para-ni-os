/* ================================================= */
/* APRENDE JUGANDO                                   */
/* Juego educativo para niños                        */
/* ================================================= */


/* ================================================= */
/* MENÚ PRINCIPAL                                    */
/* ================================================= */

const menuMaterias = document.getElementById("menu-materias");


/* Botones de materias */

const btnMatematicas =
    document.getElementById("btn-matematicas");

const btnLectura =
    document.getElementById("btn-lectura");

const btnCiencias =
    document.getElementById("btn-ciencias");

const btnArte =
    document.getElementById("btn-arte");


/* ================================================= */
/* JUEGOS                                            */
/* ================================================= */

const juegoMatematicas =
    document.getElementById("juego-matematicas");

const juegoLectura =
    document.getElementById("juego-lectura");

const juegoCiencias =
    document.getElementById("juego-ciencias");

const juegoArte =
    document.getElementById("juego-arte");


/* ================================================= */
/* PANTALLA FINAL                                    */
/* ================================================= */

const pantallaFinal =
    document.getElementById("pantalla-final");

const mensajeFinal =
    document.getElementById("mensaje-final");

const puntuacionFinal =
    document.getElementById("puntuacion-final");

const estrellasFinales =
    document.getElementById("estrellas-finales");

const btnReiniciar =
    document.getElementById("reiniciar");

const btnVolverMenuFinal =
    document.getElementById("volver-menu-final");


/* ================================================= */
/* VARIABLES GENERALES                               */
/* ================================================= */

let materiaActual = "";

let puntos = 0;

let vidas = 3;

let preguntaActual = 0;

const totalPreguntas = 10;


/* ================================================= */
/* ELEMENTOS MATEMÁTICAS                             */
/* ================================================= */

const preguntaMatematicas =
    document.getElementById("pregunta-matematicas");

const respuestasMatematicas =
    document.getElementById("respuestas-matematicas");

const resultadoMatematicas =
    document.getElementById("resultado-matematicas");

const puntosMatematicas =
    document.getElementById("puntos-matematicas");

const vidasMatematicas =
    document.getElementById("vidas-matematicas");

const progresoMatematicas =
    document.getElementById("progreso-matematicas");

const barraMatematicas =
    document.getElementById("barra-matematicas");

const volverMatematicas =
    document.getElementById("volver-matematicas");


/* ================================================= */
/* VARIABLES MATEMÁTICAS                             */
/* ================================================= */

let numero1 = 0;

let numero2 = 0;

let respuestaCorrecta = 0;


/* ================================================= */
/* ELEMENTOS LECTURA                                */
/* ================================================= */

const preguntaLectura =
    document.getElementById("pregunta-lectura");

const imagenLectura =
    document.getElementById("imagen-lectura");

const respuestasLectura =
    document.getElementById("respuestas-lectura");

const resultadoLectura =
    document.getElementById("resultado-lectura");

const puntosLectura =
    document.getElementById("puntos-lectura");

const vidasLectura =
    document.getElementById("vidas-lectura");

const progresoLectura =
    document.getElementById("progreso-lectura");

const barraLectura =
    document.getElementById("barra-lectura");

const volverLectura =
    document.getElementById("volver-lectura");


/* ================================================= */
/* DATOS DE LECTURA                                  */
/* ================================================= */

const preguntasLectura = [

    {
        imagen: "🐱",
        pregunta: "¿Qué palabra corresponde a la imagen?",
        correcta: "GATO",
        opciones: ["GATO", "PERRO", "PATO"]
    },

    {
        imagen: "🐶",
        pregunta: "¿Qué palabra corresponde a la imagen?",
        correcta: "PERRO",
        opciones: ["GATO", "PERRO", "CABALLO"]
    },

    {
        imagen: "☀️",
        pregunta: "¿Qué palabra corresponde a la imagen?",
        correcta: "SOL",
        opciones: ["LUNA", "SOL", "ESTRELLA"]
    },

    {
        imagen: "🏠",
        pregunta: "¿Qué palabra corresponde a la imagen?",
        correcta: "CASA",
        opciones: ["CASA", "ÁRBOL", "MESA"]
    },

    {
        imagen: "🌳",
        pregunta: "¿Qué palabra corresponde a la imagen?",
        correcta: "ÁRBOL",
        opciones: ["FLOR", "ÁRBOL", "FRUTA"]
    },

    {
        imagen: "🍎",
        pregunta: "¿Qué palabra corresponde a la imagen?",
        correcta: "MANZANA",
        opciones: ["MANZANA", "NARANJA", "PERA"]
    },

    {
        imagen: "🐟",
        pregunta: "¿Qué palabra corresponde a la imagen?",
        correcta: "PEZ",
        opciones: ["PEZ", "PÁJARO", "GATO"]
    },

    {
        imagen: "🌸",
        pregunta: "¿Qué palabra corresponde a la imagen?",
        correcta: "FLOR",
        opciones: ["FLOR", "ÁRBOL", "SOL"]
    },

    {
        imagen: "🚗",
        pregunta: "¿Qué palabra corresponde a la imagen?",
        correcta: "CARRO",
        opciones: ["AVIÓN", "CARRO", "BICICLETA"]
    },

    {
        imagen: "📚",
        pregunta: "¿Qué palabra corresponde a la imagen?",
        correcta: "LIBROS",
        opciones: ["LIBROS", "JUGUETES", "ZAPATOS"]
    }

];


/* ================================================= */
/* ELEMENTOS CIENCIAS                                */
/* ================================================= */

const preguntaCiencias =
    document.getElementById("pregunta-ciencias");

const respuestasCiencias =
    document.getElementById("respuestas-ciencias");

const resultadoCiencias =
    document.getElementById("resultado-ciencias");

const puntosCiencias =
    document.getElementById("puntos-ciencias");

const vidasCiencias =
    document.getElementById("vidas-ciencias");

const progresoCiencias =
    document.getElementById("progreso-ciencias");

const barraCiencias =
    document.getElementById("barra-ciencias");

const volverCiencias =
    document.getElementById("volver-ciencias");


/* ================================================= */
/* DATOS CIENCIAS                                    */
/* ================================================= */

const preguntasCiencias = [

    {
        pregunta: "¿Qué planeta es conocido como el planeta rojo?",
        correcta: "Marte",
        opciones: ["Marte", "Venus", "Júpiter"]
    },

    {
        pregunta: "¿Qué necesitan las plantas para realizar la fotosíntesis?",
        correcta: "Luz solar",
        opciones: ["Luz solar", "Oscuridad", "Piedras"]
    },

    {
        pregunta: "¿Cuál de estos animales es un mamífero?",
        correcta: "Delfín",
        opciones: ["Delfín", "Tiburón", "Gallina"]
    },

    {
        pregunta: "¿Qué órgano usamos principalmente para respirar?",
        correcta: "Pulmones",
        opciones: ["Pulmones", "Estómago", "Corazón"]
    },

    {
        pregunta: "¿Cuál es el estado sólido del agua?",
        correcta: "Hielo",
        opciones: ["Hielo", "Vapor", "Lluvia"]
    },

    {
        pregunta: "¿Qué estrella está más cerca de la Tierra?",
        correcta: "El Sol",
        opciones: ["La Luna", "El Sol", "Marte"]
    },

    {
        pregunta: "¿Cuántas patas tiene normalmente una araña?",
        correcta: "8",
        opciones: ["6", "8", "10"]
    },

    {
        pregunta: "¿Qué parte de la planta absorbe agua del suelo?",
        correcta: "Raíz",
        opciones: ["Flor", "Raíz", "Fruto"]
    },

    {
        pregunta: "¿Qué sentido utilizamos para escuchar?",
        correcta: "Oído",
        opciones: ["Vista", "Oído", "Gusto"]
    },

    {
        pregunta: "¿Qué animal pone huevos?",
        correcta: "Gallina",
        opciones: ["Gallina", "Perro", "Vaca"]
    }

];


/* ================================================= */
/* ELEMENTOS ARTE                                    */
/* ================================================= */

const preguntaArte =
    document.getElementById("pregunta-arte");

const respuestasArte =
    document.getElementById("respuestas-arte");

const resultadoArte =
    document.getElementById("resultado-arte");

const puntosArte =
    document.getElementById("puntos-arte");

const vidasArte =
    document.getElementById("vidas-arte");

const progresoArte =
    document.getElementById("progreso-arte");

const barraArte =
    document.getElementById("barra-arte");

const volverArte =
    document.getElementById("volver-arte");


/* ================================================= */
/* DATOS ARTE                                        */
/* ================================================= */

const preguntasArte = [

    {
        pregunta: "¿Cuáles son los colores primarios?",
        correcta: "Rojo, amarillo y azul",
        opciones: [
            "Rojo, amarillo y azul",
            "Verde, morado y naranja",
            "Negro, blanco y gris"
        ]
    },

    {
        pregunta: "¿Qué herramienta usamos para dibujar?",
        correcta: "Lápiz",
        opciones: ["Lápiz", "Cuchara", "Martillo"]
    },

    {
        pregunta: "¿Qué color obtenemos al mezclar azul y amarillo?",
        correcta: "Verde",
        opciones: ["Verde", "Rojo", "Negro"]
    },

    {
        pregunta: "¿Qué utilizamos para pintar sobre un lienzo?",
        correcta: "Pincel",
        opciones: ["Pincel", "Regla", "Tijeras"]
    },

    {
        pregunta: "¿Cuál de estos es un color?",
        correcta: "Morado",
        opciones: ["Morado", "Triángulo", "Círculo"]
    },

    {
        pregunta: "¿Qué forma tiene tres lados?",
        correcta: "Triángulo",
        opciones: ["Cuadrado", "Triángulo", "Círculo"]
    },

    {
        pregunta: "¿Qué forma tiene cuatro lados iguales?",
        correcta: "Cuadrado",
        opciones: ["Círculo", "Cuadrado", "Triángulo"]
    },

    {
        pregunta: "¿Qué color resulta de mezclar rojo y amarillo?",
        correcta: "Naranja",
        opciones: ["Naranja", "Azul", "Verde"]
    },

    {
        pregunta: "¿Qué usamos para borrar un dibujo a lápiz?",
        correcta: "Borrador",
        opciones: ["Borrador", "Pincel", "Pintura"]
    },

    {
        pregunta: "¿Qué disciplina artística utiliza sonidos y melodías?",
        correcta: "Música",
        opciones: ["Música", "Escultura", "Pintura"]
    }

];


/* ================================================= */
/* MOSTRAR SOLO EL MENÚ                              */
/* ================================================= */

function mostrarMenu() {

    menuMaterias.style.display = "block";

    juegoMatematicas.style.display = "none";

    juegoLectura.style.display = "none";

    juegoCiencias.style.display = "none";

    juegoArte.style.display = "none";

    pantallaFinal.style.display = "none";
}


/* ================================================= */
/* OCULTAR MENÚ                                      */
/* ================================================= */

function ocultarMenu() {

    menuMaterias.style.display = "none";
}


/* ================================================= */
/* OCULTAR TODOS LOS JUEGOS                          */
/* ================================================= */

function ocultarJuegos() {

    juegoMatematicas.style.display = "none";

    juegoLectura.style.display = "none";

    juegoCiencias.style.display = "none";

    juegoArte.style.display = "none";
}


/* ================================================= */
/* INICIAR MATEMÁTICAS                               */
/* ================================================= */

btnMatematicas.addEventListener("click", function () {

    materiaActual = "matematicas";

    ocultarMenu();

    ocultarJuegos();

    pantallaFinal.style.display = "none";

    juegoMatematicas.style.display = "block";

    puntos = 0;

    vidas = 3;

    preguntaActual = 0;

    puntosMatematicas.textContent =
        "⭐ Puntos: 0";

    vidasMatematicas.textContent =
        "❤️❤️❤️";

    resultadoMatematicas.textContent = "";

    generarPreguntaMatematicas();

});


/* ================================================= */
/* GENERAR PREGUNTA DE MATEMÁTICAS                   */
/* ================================================= */

function generarPreguntaMatematicas() {

    preguntaActual++;

    resultadoMatematicas.textContent = "";

    numero1 =
        Math.floor(Math.random() * 10) + 1;

    numero2 =
        Math.floor(Math.random() * 10) + 1;


    const operaciones = ["+", "-", "×"];

    const operacion =
        operaciones[
            Math.floor(Math.random() * operaciones.length)
        ];


    /* Evitar resultados negativos */

    if (operacion === "-" && numero1 < numero2) {

        const temporal = numero1;

        numero1 = numero2;

        numero2 = temporal;
    }


    /* Calcular respuesta */

    if (operacion === "+") {

        respuestaCorrecta =
            numero1 + numero2;

    } else if (operacion === "-") {

        respuestaCorrecta =
            numero1 - numero2;

    } else {

        respuestaCorrecta =
            numero1 * numero2;
    }


    preguntaMatematicas.textContent =
        numero1 + " " +
        operacion + " " +
        numero2 + " = ?";


    /* Progreso */

    progresoMatematicas.textContent =
        "Pregunta " +
        preguntaActual +
        " de " +
        totalPreguntas;


    const porcentaje =
        (preguntaActual / totalPreguntas) * 100;

    barraMatematicas.style.width =
        porcentaje + "%";


    generarOpcionesMatematicas();

}


/* ================================================= */
/* OPCIONES MATEMÁTICAS                              */
/* ================================================= */

function generarOpcionesMatematicas() {

    let opciones = [
        respuestaCorrecta
    ];


    while (opciones.length < 3) {

        let incorrecta =
            respuestaCorrecta +
            Math.floor(Math.random() * 11) - 5;


        if (incorrecta < 0) {

            incorrecta = 0;
        }


        if (!opciones.includes(incorrecta)) {

            opciones.push(incorrecta);
        }
    }


    /* Mezclar */

    opciones.sort(
        () => Math.random() - 0.5
    );


    respuestasMatematicas.innerHTML = "";


    opciones.forEach(function (opcion) {

        const boton =
            document.createElement("button");

        boton.className = "respuesta";

        boton.textContent = opcion;

        boton.addEventListener(
            "click",
            function () {

                verificarMatematicas(opcion);
            }
        );

        respuestasMatematicas.appendChild(boton);

    });

}


/* ================================================= */
/* VERIFICAR MATEMÁTICAS                              */
/* ================================================= */

function verificarMatematicas(respuesta) {

    if (respuesta === respuestaCorrecta) {

        puntos++;

        puntosMatematicas.textContent =
            "⭐ Puntos: " + puntos;

        resultadoMatematicas.textContent =
            "🎉 ¡Correcto!";

        if (preguntaActual >= totalPreguntas) {

            setTimeout(
                mostrarPantallaFinal,
                800
            );

        } else {

            setTimeout(
                generarPreguntaMatematicas,
                800
            );
        }

    } else {

        vidas--;

        actualizarVidasMatematicas();

        resultadoMatematicas.textContent =
            "❌ ¡Respuesta incorrecta!";

        if (vidas <= 0) {

            setTimeout(
                mostrarPantallaFinal,
                800
            );
        }
    }
}


/* ================================================= */
/* ACTUALIZAR VIDAS MATEMÁTICAS                      */
/* ================================================= */

function actualizarVidasMatematicas() {

    let corazones = "";

    for (let i = 0; i < vidas; i++) {

        corazones += "❤️";
    }

    vidasMatematicas.textContent =
        corazones;
}


/* ================================================= */
/* INICIAR LECTURA                                   */
/* ================================================= */

btnLectura.addEventListener("click", function () {

    materiaActual = "lectura";

    ocultarMenu();

    ocultarJuegos();

    pantallaFinal.style.display = "none";

    juegoLectura.style.display = "block";

    puntos = 0;

    vidas = 3;

    preguntaActual = 0;

    puntosLectura.textContent =
        "⭐ Puntos: 0";

    vidasLectura.textContent =
        "❤️❤️❤️";

    resultadoLectura.textContent = "";

    generarPreguntaLectura();

});


/* ================================================= */
/* GENERAR PREGUNTA DE LECTURA                       */
/* ================================================= */

function generarPreguntaLectura() {

    preguntaActual++;

    resultadoLectura.textContent = "";


    const pregunta =
        preguntasLectura[
            preguntaActual - 1
        ];


    imagenLectura.textContent =
        pregunta.imagen;

    preguntaLectura.textContent =
        pregunta.pregunta;


    progresoLectura.textContent =
        "Pregunta " +
        preguntaActual +
        " de " +
        totalPreguntas;


    const porcentaje =
        (preguntaActual / totalPreguntas) * 100;

    barraLectura.style.width =
        porcentaje + "%";


    respuestasLectura.innerHTML = "";


    pregunta.opciones.forEach(function (opcion) {

        const boton =
            document.createElement("button");

        boton.className = "respuesta";

        boton.textContent = opcion;

        boton.addEventListener(
            "click",
            function () {

                verificarLectura(opcion);
            }
        );

        respuestasLectura.appendChild(boton);

    });

}


/* ================================================= */
/* VERIFICAR LECTURA                                 */
/* ================================================= */

function verificarLectura(respuesta) {

    const pregunta =
        preguntasLectura[
            preguntaActual - 1
        ];


    if (respuesta === pregunta.correcta) {

        puntos++;

        puntosLectura.textContent =
            "⭐ Puntos: " + puntos;

        resultadoLectura.textContent =
            "🎉 ¡Muy bien!";

        if (preguntaActual >= totalPreguntas) {

            setTimeout(
                mostrarPantallaFinal,
                800
            );

        } else {

            setTimeout(
                generarPreguntaLectura,
                800
            );
        }

    } else {

        vidas--;

        actualizarVidasLectura();

        resultadoLectura.textContent =
            "❌ Intenta nuevamente";

        if (vidas <= 0) {

            setTimeout(
                mostrarPantallaFinal,
                800
            );
        }
    }
}


/* ================================================= */
/* ACTUALIZAR VIDAS LECTURA                          */
/* ================================================= */

function actualizarVidasLectura() {

    let corazones = "";

    for (let i = 0; i < vidas; i++) {

        corazones += "❤️";
    }

    vidasLectura.textContent =
        corazones;
}


/* ================================================= */
/* INICIAR CIENCIAS                                  */
/* ================================================= */

btnCiencias.addEventListener("click", function () {

    materiaActual = "ciencias";

    ocultarMenu();

    ocultarJuegos();

    pantallaFinal.style.display = "none";

    juegoCiencias.style.display = "block";

    puntos = 0;

    vidas = 3;

    preguntaActual = 0;

    puntosCiencias.textContent =
        "⭐ Puntos: 0";

    vidasCiencias.textContent =
        "❤️❤️❤️";

    resultadoCiencias.textContent = "";

    generarPreguntaCiencias();

});


/* ================================================= */
/* GENERAR PREGUNTA CIENCIAS                         */
/* ================================================= */

function generarPreguntaCiencias() {

    preguntaActual++;

    resultadoCiencias.textContent = "";


    const pregunta =
        preguntasCiencias[
            preguntaActual - 1
        ];


    preguntaCiencias.textContent =
        pregunta.pregunta;


    progresoCiencias.textContent =
        "Pregunta " +
        preguntaActual +
        " de " +
        totalPreguntas;


    const porcentaje =
        (preguntaActual / totalPreguntas) * 100;

    barraCiencias.style.width =
        porcentaje + "%";


    respuestasCiencias.innerHTML = "";


    pregunta.opciones.forEach(function (opcion) {

        const boton =
            document.createElement("button");

        boton.className = "respuesta";

        boton.textContent = opcion;

        boton.addEventListener(
            "click",
            function () {

                verificarCiencias(opcion);
            }
        );

        respuestasCiencias.appendChild(boton);

    });

}


/* ================================================= */
/* VERIFICAR CIENCIAS                                */
/* ================================================= */

function verificarCiencias(respuesta) {

    const pregunta =
        preguntasCiencias[
            preguntaActual - 1
        ];


    if (respuesta === pregunta.correcta) {

        puntos++;

        puntosCiencias.textContent =
            "⭐ Puntos: " + puntos;

        resultadoCiencias.textContent =
            "🎉 ¡Excelente!";

        if (preguntaActual >= totalPreguntas) {

            setTimeout(
                mostrarPantallaFinal,
                800
            );

        } else {

            setTimeout(
                generarPreguntaCiencias,
                800
            );
        }

    } else {

        vidas--;

        actualizarVidasCiencias();

        resultadoCiencias.textContent =
            "❌ Respuesta incorrecta";

        if (vidas <= 0) {

            setTimeout(
                mostrarPantallaFinal,
                800
            );
        }
    }
}


/* ================================================= */
/* ACTUALIZAR VIDAS CIENCIAS                         */
/* ================================================= */

function actualizarVidasCiencias() {

    let corazones = "";

    for (let i = 0; i < vidas; i++) {

        corazones += "❤️";
    }

    vidasCiencias.textContent =
        corazones;
}


/* ================================================= */
/* INICIAR ARTE                                      */
/* ================================================= */

btnArte.addEventListener("click", function () {

    materiaActual = "arte";

    ocultarMenu();

    ocultarJuegos();

    pantallaFinal.style.display = "none";

    juegoArte.style.display = "block";

    puntos = 0;

    vidas = 3;

    preguntaActual = 0;

    puntosArte.textContent =
        "⭐ Puntos: 0";

    vidasArte.textContent =
        "❤️❤️❤️";

    resultadoArte.textContent = "";

    generarPreguntaArte();

});


/* ================================================= */
/* GENERAR PREGUNTA ARTE                             */
/* ================================================= */

function generarPreguntaArte() {

    preguntaActual++;

    resultadoArte.textContent = "";


    const pregunta =
        preguntasArte[
            preguntaActual - 1
        ];


    preguntaArte.textContent =
        pregunta.pregunta;


    progresoArte.textContent =
        "Pregunta " +
        preguntaActual +
        " de " +
        totalPreguntas;


    const porcentaje =
        (preguntaActual / totalPreguntas) * 100;

    barraArte.style.width =
        porcentaje + "%";


    respuestasArte.innerHTML = "";


    pregunta.opciones.forEach(function (opcion) {

        const boton =
            document.createElement("button");

        boton.className = "respuesta";

        boton.textContent = opcion;

        boton.addEventListener(
            "click",
            function () {

                verificarArte(opcion);
            }
        );

        respuestasArte.appendChild(boton);

    });

}


/* ================================================= */
/* VERIFICAR ARTE                                    */
/* ================================================= */

function verificarArte(respuesta) {

    const pregunta =
        preguntasArte[
            preguntaActual - 1
        ];


    if (respuesta === pregunta.correcta) {

        puntos++;

        puntosArte.textContent =
            "⭐ Puntos: " + puntos;

        resultadoArte.textContent =
            "🎨 ¡Muy bien!";

        if (preguntaActual >= totalPreguntas) {

            setTimeout(
                mostrarPantallaFinal,
                800
            );

        } else {

            setTimeout(
                generarPreguntaArte,
                800
            );
        }

    } else {

        vidas--;

        actualizarVidasArte();

        resultadoArte.textContent =
            "❌ Respuesta incorrecta";

        if (vidas <= 0) {

            setTimeout(
                mostrarPantallaFinal,
                800
            );
        }
    }
}


/* ================================================= */
/* ACTUALIZAR VIDAS ARTE                             */
/* ================================================= */

function actualizarVidasArte() {

    let corazones = "";

    for (let i = 0; i < vidas; i++) {

        corazones += "❤️";
    }

    vidasArte.textContent =
        corazones;
}


/* ================================================= */
/* MOSTRAR PANTALLA FINAL                            */
/* ================================================= */

function mostrarPantallaFinal() {

    ocultarJuegos();

    pantallaFinal.style.display = "block";


    puntuacionFinal.textContent =
        "⭐ Tu puntuación: " +
        puntos +
        " de " +
        totalPreguntas;


    if (vidas <= 0) {

        mensajeFinal.textContent =
            "😮 ¡Se terminaron tus vidas!";

    } else {

        mensajeFinal.textContent =
            "🎉 ¡Completaste todas las preguntas!";
    }


    /* Estrellas */

    if (puntos >= 9) {

        estrellasFinales.textContent =
            "⭐⭐⭐⭐⭐";

    } else if (puntos >= 7) {

        estrellasFinales.textContent =
            "⭐⭐⭐⭐";

    } else if (puntos >= 5) {

        estrellasFinales.textContent =
            "⭐⭐⭐";

    } else if (puntos >= 3) {

        estrellasFinales.textContent =
            "⭐⭐";

    } else {

        estrellasFinales.textContent =
            "⭐";
    }

}


/* ================================================= */
/* REINICIAR JUEGO                                  */
/* ================================================= */

btnReiniciar.addEventListener("click", function () {

    pantallaFinal.style.display = "none";

    puntos = 0;

    vidas = 3;

    preguntaActual = 0;


    if (materiaActual === "matematicas") {

        juegoMatematicas.style.display = "block";

        puntosMatematicas.textContent =
            "⭐ Puntos: 0";

        vidasMatematicas.textContent =
            "❤️❤️❤️";

        generarPreguntaMatematicas();

    }


    else if (materiaActual === "lectura") {

        juegoLectura.style.display = "block";

        puntosLectura.textContent =
            "⭐ Puntos: 0";

        vidasLectura.textContent =
            "❤️❤️❤️";

        generarPreguntaLectura();

    }


    else if (materiaActual === "ciencias") {

        juegoCiencias.style.display = "block";

        puntosCiencias.textContent =
            "⭐ Puntos: 0";

        vidasCiencias.textContent =
            "❤️❤️❤️";

        generarPreguntaCiencias();

    }


    else if (materiaActual === "arte") {

        juegoArte.style.display = "block";

        puntosArte.textContent =
            "⭐ Puntos: 0";

        vidasArte.textContent =
            "❤️❤️❤️";

        generarPreguntaArte();
    }

});


/* ================================================= */
/* VOLVER AL MENÚ DESDE MATEMÁTICAS                  */
/* ================================================= */

volverMatematicas.addEventListener("click", function () {

    mostrarMenu();
});


/* ================================================= */
/* VOLVER AL MENÚ DESDE LECTURA                      */
/* ================================================= */

volverLectura.addEventListener("click", function () {

    mostrarMenu();
});


/* ================================================= */
/* VOLVER AL MENÚ DESDE CIENCIAS                     */
/* ================================================= */

volverCiencias.addEventListener("click", function () {

    mostrarMenu();
});


/* ================================================= */
/* VOLVER AL MENÚ DESDE ARTE                         */
/* ================================================= */

volverArte.addEventListener("click", function () {

    mostrarMenu();
});


/* ================================================= */
/* VOLVER AL MENÚ DESDE PANTALLA FINAL               */
/* ================================================= */

btnVolverMenuFinal.addEventListener("click", function () {

    mostrarMenu();
});


/* ================================================= */
/* INICIO                                            */
/* ================================================= */

mostrarMenu();