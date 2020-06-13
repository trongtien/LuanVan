import React from 'react';
import ProductList from '../../Components/ProductList/Product'
import BlogList from '../../Components/BlogList/Blog'
import Banner from '../../Components/Banner/index'

function MainPage(props) {
  return (
    <div className="home-page">
      <ProductList />
      <Banner />
      <BlogList />
    </div>
  );
}

export default MainPage;

