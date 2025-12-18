import React, { useState, useEffect } from 'react'

function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${page === 1 ? 0 : page * 20}`);
      const data = await response.json();
      console.log(data);
      if (data && data.products && data.length) {
        setProducts(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchProducts();
  }, [])

  return (
    <div className='container'>
      <div className='productConatiner'>
        {
          products && products.length ? 
          products.map(item => {
            <div className='product' key={item.id}>
              <img src={item.thumbnail} alt={item.alt}>
                <p>{item.title}</p>
              </img>
            </div>
          }) : null 
        } 
      </div>
      <div className='ButtonContainer'>
        <button>Load More Products</button>
      </div>
    </div>
  )
}

export default LoadMore