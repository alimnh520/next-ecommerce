import React from 'react'
import Categories from './components/homepage/Categories'
import HomeSlider from './components/homepage/HomeSlider'
import FeaturedProduct from './components/homepage/FeaturedProduct'
import Banner from './components/homepage/Banner'
import ProductReview from './components/homepage/ProductReview'
import AboutBlogs from './components/homepage/AboutBlogs'

const page = () => {
  return (
    <div className='w-full px-20 py-10 flex flex-col items-center justify-center'>
      <Categories/>
      <HomeSlider/>
      <FeaturedProduct/>
      <Banner/>
      <ProductReview/>
      <AboutBlogs/>
    </div>
  )
}

export default page