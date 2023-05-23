import { useState } from 'react';
import './App.css';

import { Products } from './components/products/Products';
import { products as initialProducts } from './mock/data.json';

function App() {
  const [ products ]= useState( initialProducts );

  const  [ filters, setFilters ] = useState({
    categoryFilter: 'all',
    minPriceFilter: 0,
  });

  const getProductsByFilter = ( productsData = [], categoryFilter = 'all', minPriceFilter = 0 ) => {
    return productsData.filter( 
      product => 
      ( 
        // FILTRO POR PRECIO MAYOR AL QUE USUARIO SELECCIONA
        product.price >= minPriceFilter 
        && 
        ( 
          // SI NO ES IGUAL A ALL QUE NO FILTRE O QUE FILTRE POR LOS QUE NO SEAN ALL, CASO CONTRARIO QUE FILTRE POR LA CATEGORIA MANDADA
          categoryFilter !== 'all'
          ? product.category === categoryFilter : product.category !== 'all' 
        ) 
      )
    )
  }

  return (
    <Products products={ getProductsByFilter( products, filters.categoryFilter, filters.minPriceFilter ) } />
  )
}

export default App
