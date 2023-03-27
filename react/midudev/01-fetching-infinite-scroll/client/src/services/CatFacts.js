const API_CATS_RANDOM_FACT = `https://catfact.ninja/fact`;
const API_CATS_SAY_WITH_RANDOM_FACT = `https://cataas.com/cat/says`;
const CATS_IMAGE_URL = `https://cataas.com`;

const getCatFacts = async () => {
  return await fetch( `${ API_CATS_RANDOM_FACT }` );       
}

const getCatImageByFirstWord = async ( firstWord ) => {
    return await fetch( `${ API_CATS_SAY_WITH_RANDOM_FACT }/${ firstWord }?size=50&color=red&json=true` );
}

export {
  getCatFacts,
  getCatImageByFirstWord,
  CATS_IMAGE_URL
}