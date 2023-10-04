import React from 'react'
import HeroHome from '../components/HeroHome'
import Categories from '../components/Categories'
import '../styles/home.css'
import Promo_section from '../components/Promo_section'
import About from '../components/About'
import Menu from '../components/Menu'
import Bg_image from '../components/Bg_image'
import Subscribe from '../components/Subscribe'

function Home() {
  return (
    <section className='home'>
      <HeroHome/>
      <Categories/>
      <Promo_section/>
      <About/>
      <Menu/>
      <Bg_image/>
      <Subscribe/>
    </section>
  )
}

export default Home
