import React, { useState } from 'react'
import '../styles/menu.css'
import food_data from '../data/food_menu'
import Menu_cards_engine from './Menu_cards_engine'
import snacks_data from '../data/snacks_data'
import beverages_data from '../data/beverages_data'

function Menu() {
    const [food, setFood] = useState(true)
    const [snack, setSnack] = useState(false)
    const [beverages, setBeverages] = useState(false)

    const foodHandler = ()=>{
        setFood(true)
        setSnack(false)
        setBeverages(false)
    }
    const snacksHandler = ()=>{
        setFood(false)
        setSnack(true)
        setBeverages(false)
    }
    const beveragesHandler = ()=>{
        setFood(false)
        setSnack(false)
        setBeverages(true)
    }
  return (
    <section className='menu mt-5 text-center container'>
            <h1 className="hero-heading text-center text-white">OUR BEST MENU</h1>
          <div className="text-center w-100">
          <div className="devider"></div>
          </div>
            <p className="p-small text-white text-center">Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Fuga, temporibus.</p>
            <div className="tabs">
                    <button className={food?'active': 'tab'} onClick={foodHandler}>Food</button>
                    <button className={snack?'active': 'tab'} onClick={snacksHandler}>Snacks</button>
                    <button className={beverages?'active': 'tab'} onClick={beveragesHandler}>Beverages</button>
            </div>
            <div className="menu-cards">
                {
                    food? <Menu_cards_engine menu_data={food_data}/> : null
                    
                }
                {
                    snack? <Menu_cards_engine menu_data={snacks_data}/> : null
                    
                }
                 {
                    beverages? <Menu_cards_engine menu_data={beverages_data}/> : null
                    
                }
            </div>
    </section>
  )
}

export default Menu
