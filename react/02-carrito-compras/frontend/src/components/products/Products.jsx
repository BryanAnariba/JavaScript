import './products.css';

// eslint-disable-next-line react/prop-types
export const Products = ({ products = [] }) => {
  
  return (
    
    <main className="products" >
      <ul>
        {
          products.slice( 0,10 ).map((product) => (
            <li key={ product.id }>
              <img src={ product.thumbnail } alt={ product.title } />
              <div>
                <strong>{ product.title }</strong> - $.{ product.price }
              </div>
              <div>
                <button>
                  Add To Cart
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
