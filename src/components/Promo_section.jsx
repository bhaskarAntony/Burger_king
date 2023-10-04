import React from 'react'
import '../styles/promo_section.css'

const promo_data=[
    {
        title:"GET A 10% DISCOUNT ON PAYDAY WEEK",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image:"https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/flying-burger-isolated-on-white-background.png"
    },
    {
        title:"BUY 1 COKE GET MORE FREE 1 COKE",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image:"https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/P44F4RZ-1.png"
    }
]

function Promo_section() {
  return (
    <section className='promo container mt-4' >
        <div className="row">
            {
                promo_data.map((item,index)=>(
                    <div className="col-12 col-md-12 col-lg-6" key={index}>
                        <div className="promo-card p-5">
                           <div className="row">
                            <div className="col-12 col-md-12 col-lg-8">
                            <p className="p-small text-main">Payday Promo</p>
                            <h2 className="text-white">{item.title}</h2>
                            <p className="p-small text-white">{item.desc}</p>
                            <p className="p-small text-main">Buy Online</p>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="promo-image mt-3 text-center">
                                    <img src={item.image} alt="" className="w-100" />
                                </div>
                            </div>

                           </div>


                        </div>
                    </div>
                ))
            }
        </div>

      
    </section>
  )
}

export default Promo_section
