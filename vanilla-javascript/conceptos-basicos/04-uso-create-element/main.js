const comidas = [ 'Pizza', 'Lasagna', 'Pupusas', 'Sopa Azteca', 'Tortillas Con Quesillo' ];

// const listaComidas = document.querySelector( '#listaComidas' );
// const liFragment = document.createDocumentFragment();
// comidas.forEach(( comida ) => {
    
//     const liTag = document.createElement( 'li' );
//     liTag.className = 'list';
    
//     const bTag = document.createElement( 'b' );
//     bTag.textContent = 'Comida: ';

//     const spanTag = document.createElement( 'span' );
//     spanTag.className = 'text-primary';
//     spanTag.textContent = comida;

//     liTag.appendChild( bTag );
//     liTag.appendChild( spanTag );
//     liFragment.appendChild( liTag );
// });
// listaComidas.appendChild( liFragment );

comidas.forEach(( comida ) => {
    document.querySelector( '#listaComidas' ).insertAdjacentHTML( 'beforeend', `<li class='list'>
        <b>Comida: </b>
        <span class='text-primary'>${ comida }</span>
    </li>`);
});

// const onVerComidaSeleccionada = ( e ) => {
//     console.log( `Quieres: `, e.target );
// }

// // Codigo Final
// const listaComidas = document.querySelector( '#listaComidas' );
// const fragment = document.createDocumentFragment();
// const liTemplate = document.querySelector( '#templateListaComidas' );
// comidas.forEach(( comida ) => {

//     //  Clonamos liTemplate
//     const liTemplateClone = liTemplate.content.firstElementChild.cloneNode( true );

//     // Insertamos la data en el objeto clonado
//     liTemplateClone.querySelector( '.text-primary' ).textContent = comida;

//     // Insertamos en el fragment
//     fragment.appendChild( liTemplateClone );

//     liTemplateClone.addEventListener( 'click', onVerComidaSeleccionada );
// });
// // Insertamos todas las comidas guardadas en el fragment ul
// listaComidas.appendChild( fragment );
