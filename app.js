// Seleccionamos el contenedor principal donde se montará la SPA. Este es el único elemento que existe en el HTML.
const app = document.getElementById("app");

//- Creamos el encabezado principal.
const header = document.createElement("header");// Creamos un elemento <header> para la cabecera de la aplicación.
const title = document.createElement("h1");// Creamos un <h1> que contendrá el título principal.
title.textContent = "GESTOR DINÁMICO DE EVENTOS"; // Asignamos el texto del título de la app.
header.appendChild(title);// Insertamos el <h1> dentro del <header>.
app.appendChild(header);// Añadimos el bloque del encabezado al contenedor principal app

// Creación dinámica del buscador
const searchInput = document.createElement("input");
searchInput.id = "search-input";
searchInput.placeholder = "Buscar eventos"; // Insertamos un texto guía del buscador

app.appendChild(searchInput);// Insertamos el buscador

// Creación dinámica del filtro por categoría
const filterCategory = document.createElement("select");
filterCategory.id = "filter-category";

filterCategory.innerHTML = `
    <option value="all">Todas</option>
    <option value="Trabajo">Trabajo</option>
    <option value="Personal">Personal</option>
    <option value="Importante">Importante</option>
    <option value="Ocio">Ocio</option>
    <option value="Prueba">Prueba</option>
`;

app.appendChild(filterCategory); // Insertamos el filtro


//- Creamos una sección destinada a la introducción de datos mediante un formulario.
const formSection = document.createElement("section");// Creamos una sección para agrupar el formulario.
formSection.id = "form-section"; // Le damos un identificador para poder darle estilo.
const formTitle = document.createElement("h2");// Título de la sección del formulario.
formTitle.textContent = "Crear nuevo evento";
const form = document.createElement("form");// Creamos el formulario.
form.id = "event-form";
form.setAttribute("novalidate", "true"); // Desactiva validación HTML5 para activar la validación más completa requerida en el apartado 11

// Insertamos los campos del formulario generando la estructura básica.
// Añadimos el campo de categoría como se pide en el apartado 4
// Modificamos los input para cumplir requisitos de validación del apartado 11
form.innerHTML = `
    <label>Nombre del evento:</label>
    <input type="text" id="event-name" required minlength="3">

    <label>Fecha:</label>
    <input type="date" id="event-date" required>

    <label>Descripción:</label>
    <textarea id="event-desc" required minlength="5"></textarea>

    <label>Categoría:</label>
    <select id="event-category">
        <option value="Trabajo">Trabajo</option>
        <option value="Personal">Personal</option>
        <option value="Importante">Importante</option>
        <option value="Ocio">Ocio</option>
    </select>

    <button type="submit">Crear evento</button>
`;

formSection.appendChild(formTitle);// Insertamos el título dentro de la sección. 
formSection.appendChild(form);// Insertamos el formulario dentro de la sección.

//Creamos un apartado donde se mostrarán los eventos creados.
const eventsSection = document.createElement("section");// Creamos una sección para listar los eventos.
eventsSection.id = "events-section";

const eventsTitle = document.createElement("h2");// Título de la sección.
eventsTitle.textContent = "Eventos creados";

// Creamos el contador dinámico de eventos requerido en el apartado 12
const eventsCounter = document.createElement("p");
eventsCounter.id = "events-counter";
eventsCounter.textContent = "Eventos totales: 0"; // Ponemos a 0 el contador de eventos
eventsSection.appendChild(eventsCounter);

const eventsList = document.createElement("div");// Contenedor donde se irán añadiendo los eventos dinámicamente.
eventsList.id = "events-list";

eventsSection.appendChild(eventsTitle);// Insertamos el título dentro de la sección. 
eventsSection.appendChild(eventsList);//Insertamos el contenedor dentro de la sección.

// Insertamos la estructura en el DOM. 
app.appendChild(formSection);// Añadimos el bloque de introducción de datos mediante formulario al contenedor principal app
app.appendChild(eventsSection);// Añadimos el bloque donde se listarán los eventos al contenedor principal app

// Selección y acceso a elementos del DOM
const formElement = document.getElementById("event-form");// Seleccionamos el formulario mediante su id
const eventsContainer = document.getElementById("events-list");// Seleccionamos el contenedor donde se mostrarán los eventos
const mainTitle = document.querySelector("header h1");// Seleccionamos el título principal

// Mostramos en consola para comprobar que se han seleccionado correctamente
console.log("Formulario:", formElement);
console.log("Contenedor de eventos:", eventsContainer);
console.log("Título principal:", mainTitle); 

// Seleccionamos todos los campos del formulario
const inputName = document.getElementById("event-name");
const inputDate = document.getElementById("event-date");
const inputDesc = document.getElementById("event-desc");
const inputCategory = document.getElementById("event-category");
const submitButton = formElement.querySelector("button");

//Validación avanzada del formulario
// Contenedor para mensajes de error
const errorBox = document.createElement("div");
errorBox.id = "error-box";
errorBox.style.color = "red";
errorBox.style.marginTop = "10px";
formSection.appendChild(errorBox);

// Función que muestra mensajes de error
function mostrarError(mensaje) {
    errorBox.textContent = mensaje;
}

// Función que limpia los errores
function limpiarError() {
    errorBox.textContent = "";
}

// Función de validación avanzada
function validarFormulario() {
    limpiarError();

    const nombre = inputName.value.trim();
    const fecha = inputDate.value;
    const descripcion = inputDesc.value.trim();
    const categoria = inputCategory.value;
    
    // Creamos los condicionales con las validaciones
    if (nombre.length < 3) {
        mostrarError("El nombre del evento debe tener al menos 3 caracteres.");
        return false;
    }

    if (!fecha) {
        mostrarError("Debes seleccionar una fecha válida.");
        return false;
    }

    const hoy = new Date().toISOString().split("T")[0];
    if (fecha < hoy) {
        mostrarError("La fecha no puede ser anterior a hoy.");
        return false;
    }

    if (descripcion.length < 5) {
        mostrarError("La descripción debe tener al menos 5 caracteres.");
        return false;
    }

    if (!categoria) {
        mostrarError("Debes seleccionar una categoría.");
        return false;
    }

    return true;
}

// Detectamos el evento "submit" del formulario, que se activa cuando el usuario pulsa el botón "Crear evento".
formElement.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitamos que la página se recargue

    // Validación antes de crear el evento
    if (!validarFormulario()) {
        return; // Detenemos el envío si hay errores
    }

    // Obtenemos los valores introducidos por el usuario
    const name = document.getElementById("event-name").value;
    const date = document.getElementById("event-date").value;
    const desc = document.getElementById("event-desc").value;
    const category = document.getElementById("event-category").value;

    // Validamos que el título no sea coincidente
const tituloDuplicado = Array.from(document.querySelectorAll(".event-item"))
    .some(ev => ev.querySelector(".event-title").textContent.trim().toLowerCase() === name.trim().toLowerCase());

if (tituloDuplicado) {
    mostrarError("Ya existe un evento con ese título.");
    return;
}

    // Creamos el contenedor principal del evento
    const newEvent = document.createElement("div");
    newEvent.classList.add("event-item");

    // Atributos personalizados
    newEvent.dataset.category = category;// Categoría del evento
    newEvent.dataset.fav = "false";// Le damos valor inicial false ya que no es favorito por defecto
    newEvent.dataset.state = "normal";// Estado inicial

    // Insertamos la información visible del evento y creamos boton de favorito y de eventos.
    newEvent.innerHTML = `
        <h3 class="event-title">${name}</h3>
        <p class="event-date">Fecha: ${date}</p>
        <p class="event-desc">${desc}</p>
        <p class="event-category">Categoría: ${category}</p>
    
        <button class="fav-btn">⭐ Favorito</button>
        <button class="delete-btn">Eliminar</button>
    `;

    // Añadimos el evento al contenedor de eventos
    eventsContainer.appendChild(newEvent);

    actualizarContador(); // Llamamos a la función que llama a actualizar el contador requerido en el apartado 12

    // Activamos el hover del apartado 5
    activarInteractividadEvento(newEvent);

    // Limpiamos el formulario tras crear el evento
    formElement.reset();
});

// Creamos una funcion que registre los metodos en consola
function registrarClick(elemento, nombre) {
    elemento.addEventListener("click", () => {
        console.log(`Has hecho clic en: ${nombre}`);
    });
}

// Detectamos clicks en cada campo del formulario
registrarClick(inputName, "Campo: Nombre del evento");
registrarClick(inputDate, "Campo: Fecha");
registrarClick(inputDesc, "Campo: Descripción");
registrarClick(inputCategory, "Campo: Categoría");
registrarClick(submitButton, "Botón: Crear evento");

// Detectamos escritura en el campo de nombre
inputName.addEventListener("input", () => {
    console.log("Escribiendo en Nombre:", inputName.value);
});

// Detectamos escritura en el campo de descripción
inputDesc.addEventListener("input", () => {
    console.log("Escribiendo en Descripción:", inputDesc.value);
});

// Detectamos escritura en el campo de fecha
inputDate.addEventListener("input", () => {
    console.log("Modificando la Fecha:", inputDate.value);
});

// Al pasar el cursor por los distintos campos añadimos un efecto visual
[inputName, inputDate, inputDesc, inputCategory].forEach(campo => {
    campo.addEventListener("mouseenter", () => {
        campo.style.backgroundColor = "#e7f5ff"; 
    });

    campo.addEventListener("mouseleave", () => {
        campo.style.backgroundColor = ""; // Restaura el color original al dejar de pasar el cursor por envima
    });
});

// Delegación de eventos, jerarquía del DOM y atributos personalizados
eventsContainer.addEventListener("click", (e) => {

    // Localizamos el evento al que pertenece el elemento clicado
    const evento = e.target.closest(".event-item");
    if (!evento) return; // Si no se ha clicado dentro de un evento, no hacemos nada

    const titulo = evento.querySelector(".event-title");
    
    // Botón de favorito 
    if (e.target.classList.contains("fav-btn")) {  
        // Si el puntero está en el botón de favorito, alternamos el atributo data-fav
        evento.dataset.fav = evento.dataset.fav === "true" ? "false" : "true";
        console.log("Favorito cambiado:", evento.dataset.fav);

        // Cambiamos estilo según favorito
        if (evento.dataset.fav === "true") {
            evento.classList.add("favorite");   // Si está marcado como favorito
        } else {
            evento.classList.remove("favorite"); // Si deja de ser favorito
        }

        return; // Salimos para no activar selección del evento
    }

    // Botón eliminar 
    if (e.target.classList.contains("delete-btn")) {  
        // Si el puntero está en el botón eliminar, borramos el evento
        console.log("Eliminando evento:", titulo.textContent);
        evento.remove();
        actualizarContador(); // Llamamos a la función que actualiza el contador 
        return;
    }

    // Selección del evento 
    // Si el puntero está en cualquier otra parte del evento, alternamos "selected"
    evento.classList.toggle("selected");
    console.log("Has hecho CLICK en el evento:", titulo.textContent);
});


// Delegación para doble clic
eventsContainer.addEventListener("dblclick", (e) => {

    const evento = e.target.closest(".event-item");
    if (!evento) return; // Si no se ha hecho doble clic dentro de un evento, no hacemos nada

    const titulo = evento.querySelector(".event-title");

    // Marcar como especial al hacer doble click
    evento.classList.toggle("special"); // Si el puntero hace doble clic en el evento
    console.log("Has hecho DOBLE CLICK en el evento:", titulo.textContent);
});

// Búsqueda y filtrado dinámico
// Función que aplica búsqueda + filtrado por categoría
function aplicarFiltros() {
    const texto = searchInput.value.toLowerCase(); // Normalizamos el texto para comparar sin mayúsculas
    const categoriaSeleccionada = filterCategory.value.toLowerCase();

    // Recorremos todos los eventos creados dinámicamente
    document.querySelectorAll(".event-item").forEach(evento => {

        // Extraemos título, descripción y categoría del evento
        const titulo = evento.querySelector(".event-title").textContent.toLowerCase();
        const desc = evento.querySelector(".event-desc").textContent.toLowerCase();
        const categoria = evento.dataset.category.toLowerCase();

        // Coincidencia por texto
        const coincideTexto =
            titulo.includes(texto) ||
            desc.includes(texto) ||
            categoria.includes(texto);

        // Coincidencia por categoría
        const coincideCategoria =
            categoriaSeleccionada === "all" ||
            categoria === categoriaSeleccionada;

        // Mostramos u ocultamos el evento según si coincide con la búsqueda y el filtro
        if (coincideTexto && coincideCategoria) {
            evento.style.display = "block"; // Coincide se muestra
        } else {
            evento.style.display = "none";// No coincide se oculta
        }
    });
}
// Creamos un botón que permite alternar entre modo claro y modo oscuro apartado 12.
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "Modo oscuro";
darkModeBtn.id = "dark-mode-btn";
app.appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

function actualizarContador() {// Funcion creada para actualizar el contador de eventos requerido en apartado 12
    const total = document.querySelectorAll(".event-item").length;
    eventsCounter.textContent = `Eventos totales: ${total}`;
}

// Detectamos escritura en el buscador para filtrar en tiempo real
searchInput.addEventListener("input", () => {
    aplicarFiltros();
});

// Detectamos cambio en el filtro de categoría
filterCategory.addEventListener("change", () => {
    aplicarFiltros();
});

actualizarContador(); // Llamamos a la función que llama a actualizar el contador
