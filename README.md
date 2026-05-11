# 🗂️ Gestor Dinámico de Eventos

Aplicación web tipo SPA desarrollada en **JavaScript**, **HTML** y **CSS**, diseñada para crear, gestionar y filtrar eventos de forma dinámica.  
Incluye validación avanzada, modo oscuro, filtrado en tiempo real, categorías visuales y múltiples interacciones del usuario.

## 📌 Acceso a DEMO 
👉 https://gestor-dinamico-de-eventos.vercel.app
---

## 🚀 Características principales

- ✔ **Creación dinámica de eventos** sin recargar la página  
- ✔ **Validación avanzada** del formulario (mínimos, fechas, duplicados…)  
- ✔ **Búsqueda en tiempo real** por título, descripción o categoría  
- ✔ **Filtrado por categoría**  
- ✔ **Modo oscuro** con estilos adaptados  
- ✔ **Eventos interactivos**:
  - Selección con clic  
  - Estado especial con doble clic  
  - Marcar como favorito ⭐  
  - Eliminación individual  
- ✔ **Contador dinámico** de eventos  
- ✔ **Atributos personalizados (`dataset`)** para gestionar estados  
- ✔ **Delegación de eventos** para optimizar rendimiento  
- ✔ **Diseño responsive** para móviles  
- ✔ **Estilos visuales por categoría** (Trabajo, Personal, Importante, Ocio, Prueba)

---

## 🧠 Tecnologías utilizadas

- **HTML5**  
- **CSS3** (modo oscuro, responsive, categorías, animaciones)  
- **JavaScript Vanilla** (SPA, DOM, eventos, validación, filtros)

---

## 📦 Estructura del proyecto

📁 proyecto-eventos
│── index.html
│── app.js
│── styles.css


---

## 🧩 Funcionamiento general

### 🔹 1. Generación dinámica de la interfaz  
Toda la estructura (header, formulario, buscador, filtros, secciones…) se crea desde `app.js`.

### 🔹 2. Validación avanzada  
El formulario comprueba:

- nombre mínimo 3 caracteres  
- descripción mínima 5  
- fecha válida y no pasada  
- categoría seleccionada  
- título no duplicado  

### 🔹 3. Gestión de eventos  
Cada evento incluye:

- título  
- fecha  
- descripción  
- categoría  
- botones de favorito y eliminar  

### 🔹 4. Interacciones del usuario  
- **Click** → selecciona  
- **Doble click** → marca como especial  
- **Botón ⭐** → alterna favorito  
- **Eliminar** → borra el evento  
- **Hover** → efectos visuales  
- **Escritura** → logs en consola  

### 🔹 5. Búsqueda + filtro  
Se combinan ambos criterios:

- texto (título, descripción, categoría)  
- categoría seleccionada  

### 🔹 6. Modo oscuro  
Botón que alterna la clase `dark-mode` con estilos adaptados.

---

## 📱 Responsive  
Incluye media queries para pantallas pequeñas:

- filtros en columna  
- formulario adaptado  
- eventos en una sola columna  
- padding reducido  

---

## 🖼️ Capturas de pantalla  

<img width="3820" height="2002" alt="image" src="https://github.com/user-attachments/assets/659b8dd5-e4ab-4607-9c1e-4366cd08b1f1" />

<br>

<img width="1396" height="1992" alt="image" src="https://github.com/user-attachments/assets/697eab41-021d-4e02-8b0b-2d4068e4244d" />

---


🧑‍💻 Autor
Diego Alberto Rodríguez Ramos  
Estudiante de DAM & DAW
GitHub: https://github.com/WindedDiego
