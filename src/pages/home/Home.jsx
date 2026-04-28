import React from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/nav/Navbar'
import HomeSlider from '../../components/homeSlider/HomeSlider'
import AppleSwiper from '../../components/appleSwiper/appleSwiper'
import PopularProducts from '../../components/popularProducts/PopularProducts'
import DiscountDay from '../../components/discountDay/discountDay'
import Beauty from '../../components/beauty/beauty'
import AutoProducts from '../../components/autoProducts/autoProducts'
import Perfume from '../../components/perfume/perfume'
import SportTechs from '../../components/sportTechs/sportTechs'
import Laptops from '../../components/laptops/laptops'
import CleaningTechs from '../../components/cleaningTechs/cleaningTechs'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Navbar />
      <HomeSlider />


      <main>
        <AppleSwiper />
        <PopularProducts />
        <DiscountDay />
        <Beauty />
        <AutoProducts />
        <Perfume />
        <SportTechs />
        <Laptops />
        <CleaningTechs />
      </main>

      <Footer />
    </div>
  )
}

export default Home
