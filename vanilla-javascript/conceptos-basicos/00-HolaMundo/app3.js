console.log( 'Inicio Programa' ); // 1

// 5
setTimeout( () => {
    console.log('Primer Timeout');
}, 3000 );


setTimeout( () => { // 3
    console.log('Segundo Timeout');
}, 0 );


setTimeout( () => { // 4
    console.log('Tercer Timeout');
}, 0 );

console.log( 'Fin Programa' ); // 2