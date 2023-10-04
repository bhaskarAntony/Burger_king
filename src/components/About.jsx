import React from 'react'

function About() {
  return (
    <section className='about container mt-4'>
        <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
                <div className="about-image mb-4">
                    <img src="https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/homemade-beef-burger-caramelized-onion-bacon-and-beer-e1627971449244.jpg" alt="" className="w-100 rounded-3" />
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
                <div className="about-text">
                    <h2 className="text-white mb-4">FIND YOUR BEST TASTED FOOD & <br /> DRINK JUST IN ONE PLACE</h2>
                    <div className="devider mb-3"></div>
                    <p className="p-small text-white mb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                        <p className="p-small text-white">
                        <i class="bi bi-check2 text-main mx-1"></i>
                        Best Price
                        </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                        <p className="p-small text-white">
                        <i class="bi bi-check2 text-main mx-1"></i>
                        Best Service
                        </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                        <p className="p-small text-white">
                        <i class="bi bi-check2 text-main mx-1"></i>
                        Fresh Ingredient
                        </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                        <p className="p-small text-white">
                        <i class="bi bi-check2 text-main mx-1"></i>
                        Health Protocol
                        </p>
                        </div>
                    </div>
                    <button className=" hero-btn main-btn px-5">About Us</button>
                </div>
                </div>
        </div>
    </section>
  )
}

export default About
