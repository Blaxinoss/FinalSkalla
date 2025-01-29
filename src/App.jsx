
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs';
import './App.css';
import ProductList from './ProductList';

function App() {


  const cart = useSelector(state => state.cart.items);
  const [cartItemLength, setCartItemLength] = useState(cart.reduce((acc, item) => acc + item.quantity, 0))


  useEffect(() => {
    setCartItemLength(cart.reduce((acc, item) => acc + item.quantity, 0))
  }, [cart])



  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>

            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>

      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList cartNum={cartItemLength} />
      </div>
    </div>
  );
}

export default App;



