import React, { useState, useEffect } from 'react';

function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${page * 20}`);
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setLoading(false);

        // To Disable The Load More button if we've loaded all products(Max=100)
        if (data.products.length < 20 || products.length + data.products.length >= data.total) {
          setDisableButton(true);
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Products</h1>

      <div style={styles.productContainer}>
        {products && products.length ? (
          products.map((item) => (
            <div style={styles.product} key={item.id}>
              <div style={styles.imageWrapper}>
                <img src={item.thumbnail} alt={item.title} style={styles.image} />
              </div>
              <div style={styles.productInfo}>
                <h3 style={styles.productTitle}>{item.title}</h3>
                <p style={styles.productPrice}>${item.price}</p>
              </div>
            </div>
          ))
        ) : null}
      </div>

      {loading && (
        <div style={styles.loadingContainer}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>Loading...</p>
        </div>
      )}

      <div style={styles.buttonContainer}>
        <button
          onClick={handleLoadMore}
          disabled={disableButton || loading}
          style={{
            ...styles.button,
            ...(disableButton || loading ? styles.buttonDisabled : {}),
          }}
        >
          {disableButton ? 'All Products Loaded' : 'Load More Products'}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '40px',
    color: '#1a1a1a',
    fontWeight: '600',
    letterSpacing: '-0.5px',
  },
  productContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '40px',
  },
  product: {
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  imageWrapper: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  productInfo: {
    padding: '16px',
  },
  productTitle: {
    fontSize: '1rem',
    fontWeight: '500',
    color: '#2c2c2c',
    margin: '0 0 8px 0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  productPrice: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: '0',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
  },
  button: {
    padding: '14px 32px',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#ffffff',
    backgroundColor: '#1a1a1a',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, transform 0.1s ease',
    letterSpacing: '0.3px',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
    cursor: 'not-allowed',
    opacity: '0.6',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 0',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #f0f0f0',
    borderTop: '4px solid #1a1a1a',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  loadingText: {
    marginTop: '16px',
    color: '#666',
    fontSize: '1rem',
  },
};


const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  div[style*="productContainer"] > div:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  
  button:not(:disabled):hover {
    background-color: #333333 !important;
    transform: translateY(-1px);
  }
  
  button:not(:disabled):active {
    transform: translateY(0);
  }
`;
document.head.appendChild(styleSheet);

export default LoadMore;