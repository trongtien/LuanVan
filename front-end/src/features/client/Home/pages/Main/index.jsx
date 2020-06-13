import React from 'react';
import ProductList from '../../Components/ProductList/Product'
import BlogList from '../../Components/BlogList/Blog'

function MainPage(props) {
  return (
    <div className="home-page">
      <ProductList />
      <BlogList />
    </div>
  );
}

export default MainPage;

