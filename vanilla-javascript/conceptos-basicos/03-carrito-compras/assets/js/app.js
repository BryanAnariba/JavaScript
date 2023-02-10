let agregandoAlCarrito = {}
window.onload = () => {
    getItems();
}

const getItems = async () => {
    try {
        const res = await fetch( `database/data.json` );
        const data = await res.json();
        //console.log( 'Data: ', data );
        pintaItemEnCarrito( data )

    } catch ( err ) {
        console.error( `Error: ${ err }` );
    }
}

const pintaItemEnCarrito = ( items ) => {
    items.forEach(producto => {
        console.log( 'Producto: ', producto )
        document.getElementById( 'items' ).innerHTML += 
        `
            <div class="col-12 mb-2 col-md-4">
                <div class="card">
                    <img class="img-fluid card-img-top" src="${ producto.thumbnailUrl }">
                    <div class="card-body">
                        <h5>${ producto.title }</h5>
                        <p>${ producto.precio }</p>
                    </div>
                    <button class="btn btn-dark" onclick="setCarrito('${ producto.title }', ${ producto.id }, ${ producto.precio })">
                        Comprar
                    </button>
                </div>
            </div>
        `; 
    });    
}

const setCarrito = ( title, id, precio ) => {
    console.log( title, id, precio )
    const producto = {
        id: id,
        title: title,
        precio: precio,
        cantidad: 1
    }

    if ( agregandoAlCarrito.hasOwnProperty( producto.id ) ) { // si ya existe en carrito aumentar la cantidad del producto en el carrito
        producto.cantidad = agregandoAlCarrito[ producto.id ].cantidad + 1
    }

    agregandoAlCarrito[ producto.id ] = { ...producto };
    console.log( 'Items en el carrito: ', agregandoAlCarrito );
}
