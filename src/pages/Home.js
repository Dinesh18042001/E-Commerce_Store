import React from 'react';
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
      <h2 className='heading' style={{color: 'green'}}> Welcome to my store</h2>
      <section>
        <h3>Product</h3>
        <Products/>
      </section>
    </div>
  );
};

export default Home;
