import React, { useEffect, useState } from 'react'
import { CATS_IMAGE_URL, getCatFacts, getCatImageByFirstWord } from './services/CatFacts';
import '../App.css'
/*
    RECUPERAR UN HECHO ALEATORIO DE GATOS DE LA PRIMERA API

    RECUPERAR LA PRIMERA PALABRA DEL HECHO

    MUESTRA UNA IMAGEN DE UN GATO CON LA PRIMERA PALABRA RECUPERADA
*/

export const App = () => {
  const [ fact, setFact ] = useState( null );
  const [ imageUrl, setImageUrl ] = useState( null );
  const [ factError, setFactError ] = useState( null );

  // PRIMER USEEFFECT PARA OBTENER LA ORACION
  useEffect(() => {
    getCatFacts()
    .then(( response ) => {
        // TODO: handle error if not response status ok
        if ( !response.ok ) {
            throw new Error( 'No se ha podido recuperar la oracion' );
        }
        return response.json();
    })
    .then(( response ) => {
        console.log('response', response);
        setFact( response.fact );
    })
    .catch((error) => {
        console.error( error );
        setFactError( error );
    });
  }, []);

  // SEGUNDO USEEFFECT ESTE SERVIRA PARA QUE ESTE PENDIENTE DEL ESTADO CAMBIANTE DEL FACT DEL PRIMER USEEFFECT
  useEffect(() => {
    if ( !fact ) return;
    const firstWord = fact.split( ' ' ).shift(); // PRIMERA PALABRA
    const firstSecondThirdsWord = fact.split( ' ' ).slice( 0,3 ).join( ' ' ); // PRIMERA, SEGUNDA Y TERCER PALABRA
    console.log({ firstWord });
    console.log({ firstSecondThirdsWord });
    getCatImageByFirstWord( firstSecondThirdsWord )
    .then(( response ) => response.json())
    .then(( response ) => {
        console.log( 'Cat Image: ', response)
        const { url } = response;
        setImageUrl( url );
    })
    .catch(( error ) => {
        console.log( error );
    });
  }, [ fact ])

  return (
    <main>
        <div>App de Gatitos</div>
        <section>
        {
            ( fact )
            ?
                <p>{ JSON.stringify( fact ) }</p>
            :
                <p>Loading...</p>
        }

        {
            ( imageUrl )
            &&
            <img src={ `${ CATS_IMAGE_URL }${ imageUrl }` } alt={ `Imagen extraida de sacar la primer letra de ${ fact }` } />
        }
        </section>
    </main>
  )
}
