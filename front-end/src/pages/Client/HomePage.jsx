import React from 'react'
import ProductComponent from '../../components/Client/Product/ProductComponent'
import BlogComponent from '../../components/Client/Blog/BlogComponent'

function HomePage() {
  return (
    <div className="home-page">
      <ProductComponent />
      <BlogComponent />
    </div>
  )
}

export default HomePage;
