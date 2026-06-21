

let productos=[];
let carrito = [];

fetch("./productos.json")
    .then(respuesta => respuesta.json())
    .then(datos => {

        productos = datos;
        renderizar();
    })

    .catch(error => {
        console.log("Error cargando productos:", error);

    });


const recuperarCarrito = () => {
    const datos = localStorage.getItem("carrito");

    if(datos){
        carrito = JSON.parse(datos);
    }
};

const guardarCarrito = () => {
    localStorage.setItem(
        "carrito", JSON.stringify(carrito)
    );
};

const agregarProducto = (idProducto) => {

    let encontrado = false;

    carrito.forEach(producto => {

        if(producto.id === idProducto){
            producto.cantidad++;
            encontrado = true;
        }

    });

    if(!encontrado){
        productos.forEach(producto => {

            if(producto.id === idProducto){

                carrito.push({
                    id: producto.id,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    imagen: producto.imagen,
                    cantidad: 1
                });

            }

        });

    }

    guardarCarrito();
    renderizar();
};

const aumentarCantidad = (idProducto) => {

    carrito.forEach(producto => {

        if(producto.id === idProducto){
            producto.cantidad++;
        }

    });

    guardarCarrito();
    renderizar();
};

const disminuirCantidad = (idProducto) => {

    carrito.forEach(producto => {

        if(producto.id === idProducto){
            producto.cantidad--;
        }

    });

    carrito = carrito.filter(producto => producto.cantidad > 0);

    guardarCarrito();
    renderizar();
};

const eliminarProducto = (idProducto) => {

    carrito = carrito.filter(
        producto => producto.id !== idProducto
    );

    guardarCarrito();
    renderizar();
};

const vaciarCarrito = () => {

    carrito = [];

    guardarCarrito();
    renderizar();
};

const calcularTotal = () => {

    let total = 0;

    carrito.forEach(producto => {

        total += producto.precio * producto.cantidad;

    });

    return total;
};

const renderizar = () => {

    const listado = document.getElementById("listado");

    listado.innerHTML = "";

    let html = `
        <h4>Productos de electricidad</h4>
        <div class="productos">
    `;

    productos.forEach(producto => {

        html += `
            <div class="card">
                <img src="${producto.imagen}">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>

                <button
                    class="agregar"
                    onclick="agregarProducto(${producto.id})">
                    Agregar
                </button>
            </div>
        `;

    });

    html += `
        </div>

        <h2>Carrito</h2>

        <div class="carrito">
    `;

    carrito.forEach(producto => {

        html += `
            <div class="card">
                <img src="${producto.imagen}">
                <h3>${producto.nombre}</h3>

                <p>Precio: $${producto.precio}</p>

                <p>Cantidad: ${producto.cantidad}</p>

                <p>
                    Subtotal:
                    $${producto.precio * producto.cantidad}
                </p>

                <button
                    class="mas"
                    onclick="aumentarCantidad(${producto.id})">
                    +
                </button>

                <button
                    class="menos"
                    onclick="disminuirCantidad(${producto.id})">
                    -
                </button>

                <button
                    class="eliminar"
                    onclick="eliminarProducto(${producto.id})">
                    Eliminar
                </button>
            </div>
        `;

    });

    html += `
        </div>

        <div class="total">
            Total: $${calcularTotal()}
        </div>

        <button
            class="vaciar"
            onclick="vaciarCarrito()">
            Vaciar carrito
        </button>
    `;

    listado.innerHTML = html;
};

recuperarCarrito();
renderizar();