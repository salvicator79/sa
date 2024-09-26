// Datos iniciales: productos disponibles en el inventario
const productos = [
    { nombre: "Laptop", categoria: "Electrónica" },
    { nombre: "Teléfono", categoria: "Electrónica" },
    { nombre: "Silla", categoria: "Muebles" },
    { nombre: "Escritorio", categoria: "Muebles" },
    { nombre: "Camiseta", categoria: "Ropa" },
    { nombre: "Pantalón", categoria: "Ropa" },
    { nombre: "Televisor", categoria: "Electrónica" },
    { nombre: "Audífonos", categoria: "Electrónica" },
    { nombre: "Cafetera", categoria: "Electrodomésticos" },
    { nombre: "Refrigerador", categoria: "Electrodomésticos" },
    { nombre: "Zapatos", categoria: "Ropa" },
    { nombre: "Vestido", categoria: "Ropa" },
    { nombre: "Mesa de centro", categoria: "Muebles" },
    { nombre: "Sofá", categoria: "Muebles" },
    { nombre: "Reloj de pulsera", categoria: "Accesorios" },
    { nombre: "Gorra", categoria: "Accesorios" },
    { nombre: "Pelota de fútbol", categoria: "Deportes" },
    { nombre: "Raqueta de tenis", categoria: "Deportes" },
    { nombre: "Bicicleta", categoria: "Deportes" },
    { nombre: "Juguete de acción", categoria: "Juguetería" },
    { nombre: "Rompecabezas", categoria: "Juguetería" },
    { nombre: "Muñeca", categoria: "Juguetería" },
    { nombre: "Set de cocina de juguete", categoria: "Juguetería" },
    { nombre: "Libros de cocina", categoria: "Libros" },
    { nombre: "Novela de ficción", categoria: "Libros" },
    { nombre: "Cómic", categoria: "Libros" },
    { nombre: "Perfume", categoria: "Cosméticos" },
    { nombre: "Crema hidratante", categoria: "Cosméticos" },
    { nombre: "Shampoo", categoria: "Cuidado personal" },
    { nombre: "Gafas de sol", categoria: "Accesorios" },
    { nombre: "Lámpara de mesa", categoria: "Muebles" },
    { nombre: "Ventilador", categoria: "Electrodomésticos" },
    { nombre: "Cámara fotográfica", categoria: "Electrónica" },
    { nombre: "Chaqueta", categoria: "Ropa" },
    { nombre: "Guantes de invierno", categoria: "Ropa" },
    { nombre: "Almohada", categoria: "Hogar" },
    { nombre: "Colcha", categoria: "Hogar" }
];

// Función para filtrar productos por categoría
const filtrarPorCategoria = (categoria) => {
    // Utilizamos la función 'filter' para obtener solo los productos que coinciden
    return productos.filter(producto => producto.categoria.toLowerCase() === categoria.toLowerCase());
};
// Función para mostrar los productos filtrados en la lista
const mostrarProductos = (productosFiltrados, categoria) => {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = ''; // Limpiamos la lista antes de mostrar los resultados

    // Limpiamos cualquier mensaje previo
    const mensajesPrevios = document.querySelectorAll('.mensaje-divertido');
    mensajesPrevios.forEach(mensaje => mensaje.remove());

    // Si no hay productos que coincidan con la categoría
    if (productosFiltrados.length === 0) {
        mostrarMensajeDivertido(); // Llamamos a la función para mostrar un mensaje divertido
        return;
    }

    // Mensaje divertido relacionado con la categoría
    mostrarMensajePorCategoria(categoria);

    // Mostramos los productos filtrados
    productosFiltrados.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = producto.nombre;
        listaProductos.appendChild(li);
    });
};

// Función que muestra un mensaje divertido si no se encuentra ningún producto
const mostrarMensajeDivertido = () => {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = `<li class="mensaje-divertido">Oops! 🤯 No encontramos nada aquí. Quizás los alienígenas se llevaron estos productos 🚀🛸.</li>`;
};

// Función que muestra un mensaje divertido según la categoría
const mostrarMensajePorCategoria = (categoria) => {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.classList.add('mensaje-divertido');
    const listaProductos = document.getElementById('lista-productos');

    // Mensajes personalizados para cada categoría
    let mensaje = '';
    switch (categoria.toLowerCase()) {
        case 'electrónica':
            mensaje = "¡Cuidado! ⚡ Demasiada tecnología podría convertirte en un robot 🤖.";
            break;
        case 'muebles':
            mensaje = "¿Muebles nuevos? 🛋️ Solo recuerda no perder el control remoto entre los cojines 😅.";
            break;
        case 'ropa':
            mensaje = "¡Hora de renovar el armario! 👗 No más calcetines perdidos en la lavadora 🧦.";
            break;
        case 'deportes':
            mensaje = "¡A entrenar! 🏋️‍♂️ Pero primero, una siestecita antes de hacer ejercicio 💤.";
            break;
        case 'juguetería':
            mensaje = "¡Diversión asegurada! 🎮 ¿Listo para sentirte como un niño otra vez? 😄.";
            break;
        case 'libros':
            mensaje = "¡Hora de leer! 📚 Sumérgete en un mundo donde todo es posible. Sin spoilers 😉.";
            break;
        case 'accesorios':
            mensaje = "¡A brillar! ✨ Nada como unos buenos accesorios para sentirte fabuloso 😎.";
            break;
        case 'cosméticos':
            mensaje = "¡Belleza en camino! 💄 Solo recuerda: ¡la verdadera belleza está en tu sonrisa! 😁.";
            break;
        default:
            mensaje = "¡Ah, qué interesante! Parece que tenemos algo especial para ti 🔍.";
            break;
    }

    // Insertamos el mensaje antes de la lista de productos
    mensajeDiv.textContent = mensaje;
    listaProductos.parentNode.insertBefore(mensajeDiv, listaProductos);
};

// Manejamos el envío del formulario
document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evitamos que el formulario se envíe y recargue la página
    // Obtenemos el valor de la categoría ingresada por el usuario
    const categoria = document.getElementById('categoria').value;

    // Filtramos los productos y los mostramos
    const productosFiltrados = filtrarPorCategoria(categoria);
    mostrarProductos(productosFiltrados, categoria);
});
