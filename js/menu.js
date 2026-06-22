
console.log("menu.js cargado");



const crearMenu = () => {
    console.log("crearMenu ejecutado");
    const menu = document.getElementById("menu");



    // Detecta automáticamente la carpeta "pages"
    const esPaginaSecundaria = window.location.pathname.includes("/pages/");
    const prefijo = esPaginaSecundaria ? "../" : "./";



    menu.innerHTML = `
        <nav class="menu">  
             <ul>
                <li><a href="${prefijo}index.html"><strong>Inicio</strong></a></li>
                <li><a href="${prefijo}pages/productos.html"><strong>Productos</strong></a></li>
                <li> <a href="${prefijo}pages/servicios.html"><strong>Servicios</strong></a></li>
                <li><a href="${prefijo}pages/resenas.html"><strong>Reseñas</strong></a></li>
                <li><a href="${prefijo}pages/contacto.html"><strong>Contacto</strong></a></li>
            </ul>

        </nav>
    `;
};

crearMenu();