const fs = require( 'fs' );
require( 'colors' );
const Multiplica = ( base = 1, listar, hasta ) => {
    return new Promise(( resolve, reject ) => {
        //fs.writeFileSync ( `tabla-del-${ base }.txt`, salida );
        let salida = '';
        let salida2 = '';
        for ( let i = 1; i <= hasta; i++ ) {
            //console.log( `${ base } x ${ i } = ${ Number(base) * Number(i) }` );
            salida2 += `${ base } x ${ i } = ${ Number(base) * Number(i) }\n`;
            salida += `${ base }`.green + 'x'.yellow + `${ i }`.green +  `=`.green + `${ Number(base) * Number(i) }`.yellow+'\n';
        }
        //console.log( salida );
        //Guardar en el archivo txt
        if ( listar ) {
            console.clear();
            console.log( `<========= Imprimiento la tabla del ${ base } ========>`.green );
            console.log( salida );
        }
        
        fs.writeFile( `./uploads/tabla-del-${ base }.txt`, salida2, ( err ) => {
            if ( err ) {
                reject( err );
            }
            //console.log( 'Archivo generado con exito' );
            resolve( 'Archivo generado con exito' );
        });
    });
}

module.exports = { Multiplica };