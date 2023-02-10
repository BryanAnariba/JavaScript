const carrito = document.getElementById( 'carrito' );
const templateCarrito = document.getElementById( 'liItemsCarritoCompra' );
const fragment = document.createDocumentFragment();
const itemsCarrito = {};

const agregarFrutaCarrito = ( fruta ) => {
    const producto = {
        titulo: fruta,
        id: fruta,
        cantidad: 0
    }

    if ( itemsCarrito.hasOwnProperty( producto.id ) ) {
        producto.cantidad = itemsCarrito[ producto.titulo ].cantidad + 1
    } else {
        producto.cantidad = 1
    }

    itemsCarrito[ producto.titulo ] = producto;
    console.log( itemsCarrito );
    pintarCarrito();
}

const pintarCarrito = () => {
    carrito.textContent = '';

    Object.values( itemsCarrito ).forEach(( itemCarrito ) => {
        const cloneTemplateCarrito = templateCarrito.content.firstElementChild.cloneNode( true );
        cloneTemplateCarrito.querySelector( '.lead' ).textContent = itemCarrito.titulo;
        cloneTemplateCarrito.querySelector( '#cantidadItems' ).textContent = itemCarrito.cantidad;
        fragment.appendChild( cloneTemplateCarrito );
    });

    carrito.appendChild( fragment );
}