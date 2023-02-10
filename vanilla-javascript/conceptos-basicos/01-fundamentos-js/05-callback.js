setTimeout( () => {
    console.log( 'Helloooo I am a callback ' );
}, 1500);

const getUsuarioById = ( id, callback ) => {
    const usuario = {
        id,
        nombre: 'Bryan Ariel Sanchez Anariba'
    };

    setTimeout( () => {
        callback( usuario )
    }, 1500);
}

getUsuarioById( 55, ( usuario ) => {
    console.log( usuario.id );
    console.log( usuario.nombre.toUpperCase() );
});