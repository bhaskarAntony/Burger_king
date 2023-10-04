import React, { useEffect } from 'react'
import '../styles/menu.css'
import AOS from 'aos';

function Menu_cards_engine(props) {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
  return (
    <div className='row mt-5'>
      {
        props.menu_data.map((item, index)=>(
            <div className="col-12 col-md-6 col-lg-3" key={index}>
                <div className="menu-card text-start mb-4" data-aos="fade-up">
                    <div className="menu-card-image p-5 mb-3 text-center">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="menu-card-text">
                        <h4 className='text-white'>{item.title}</h4>
                        <p className="p-small text-white">{item.desc}</p>
                        <h5 className="text-main">{item.price}</h5>
                    </div>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Menu_cards_engine
