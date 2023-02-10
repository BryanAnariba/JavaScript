const multer = require( 'multer' );
// CALLBACk -> FUNCION QUE SE EJECUTA LUEGO DE QUE SE REALIZA ALGO
const storage = multer.diskStorage({
    destination: function ( req, file, cb ) {

        // retrocedemos de rutas y entramos a storage
        const pathStorage = `${ __dirname }/../storage`;

        // calback ejecuta => carpeta destino storage y no errores por eso null
        cb( null, pathStorage );

    },
    filename: function ( req, file, cb ) {

        // por si tiene varios . en el nombre por ejemplo mi.foto.png con pop agarras el ultimo
        const extentionFile = file.originalname.split( '.' ).pop();

        // ARMAMOS EL NOMBRE
        const fileName = `file-${ Date.now() }.${ extentionFile }`;

        // calback ejecuta => nuevo nombre del archivo y no errores por eso null
        cb( null, fileName );

    },
});

module.exports = {
    storage,
}