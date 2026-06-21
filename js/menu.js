
const crearMenu = () => {

    const menu = document.getElementById("menu");

    menu.innerHTML = `
        <nav class="menu">  
             <ul>
                <li><a href="../index.html"><strong>Inicio</strong></a></li>
                <li><a href="../pages/productos.html"><strong>Productos</strong></a></li>
                <li> <a href="../pages/servicios.html"><strong>Servicios</strong></a></li>
                <li><a href="../pages/reseñas.html"><strong>Reseñas</strong></a></li>
                <li><a href="../pages/contacto.html"><strong>Contacto</strong></a></li>
            </ul>

        </nav>
    `;
};

crearMenu();