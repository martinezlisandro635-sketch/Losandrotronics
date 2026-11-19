<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LMTRONICS | Tienda de Auriculares</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

    <header>
        <div class="logo-contenedor">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
            <h1>LM<span>TRONICS</span></h1>
        </div>

        <nav class="menu-navegacion">
            <a href="#inicio">Inicio</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#contacto">Contacto</a>
        </nav>

        <button class="btn-carrito-header" onclick="abrirCarrito()">
            🛒 Carrito (<span id="contador-carrito">0</span>)
        </button>
    </header>

    <section class="hero" id="inicio">
        <h2>Tecnología y Sonido de Alta Fidelidad</h2>
        <p>Explora nuestro catálogo de auriculares inalámbricos, gamers y de estudio.</p>
    </section>

    <main class="contenedor" id="catalogo">
        <div class="filtros">
            <button class="btn-filtro activo" onclick="filtrarCatalogo('todos', this)">Todos</button>
            <button class="btn-filtro" onclick="filtrarCatalogo('inalambricos', this)">Inalámbricos</button>
            <button class="btn-filtro" onclick="filtrarCatalogo('estudio', this)">Estudio / Vincha</button>
        </div>

        <!-- Contenedor donde JavaScript carga todos los productos -->
        <div id="grid-productos" class="catalogo"></div>

        <section class="contacto" id="contacto">
            <h3>¿Necesitas asesoramiento?</h3>
            <p>Escribinos por WhatsApp y te ayudamos a elegir el auricular ideal para vos.</p>
            <button class="btn-whatsapp" style="max-width: 280px;" onclick="window.open('https://wa.me/5493876560644', '_blank')">Consultar por WhatsApp</button>
        </section>
    </main>

    <!-- Ventana de Detalle de Producto -->
    <dialog id="modal-detalle" class="modal">
        <div class="modal-box">
            <span class="cerrar" onclick="cerrarDetalle()">&times;</span>
            <img id="detalle-img" src="" alt="Auricular">
            <span id="detalle-cat" class="etiqueta"></span>
            <h2 id="detalle-titulo"></h2>
            <p id="detalle-desc"></p>
            <div class="precio-grande" id="detalle-precio"></div>
            <button id="detalle-btn-agregar" class="btn-primario" style="width: 100%; padding: 12px;">Agregar al Carrito</button>
        </div>
    </dialog>

    <!-- Ventana del Carrito de Compras -->
    <dialog id="modal-carrito" class="modal">
        <div class="modal-box">
            <span class="cerrar" onclick="cerrarCarrito()">&times;</span>
            <h2>Tu Carrito LMTRONICS</h2>
            <div id="lista-carrito" class="lista-carrito"></div>
            <div class="total-carrito">
                Total a pagar: <span id="total-precio">$0</span>
            </div>
            <button class="btn-whatsapp" onclick="enviarPedidoWhatsApp()">Finalizar Compra por WhatsApp</button>
            <button class="btn-vaciar" onclick="vaciarCarrito()">Vaciar Carrito</button>
        </div>
    </dialog>

    <footer>
        <p>&copy; 2026 LMTRONICS. Todos los derechos reservados.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
