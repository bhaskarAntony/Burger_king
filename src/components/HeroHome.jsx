import React from 'react'
import '../styles/hero.css'
function HeroHome() {
  return (
    <section className='hero container-fluid'>
      <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-7">
            <div className="hero-text">
            <div className="blur-left"></div>
                <h1 className="hero-heading text-white">Momentum</h1>
                <h1 className='hero-subtitle text-white'>Launch your product — and savor the momentum</h1>
                <p className="p-small text-white mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, aliquid.</p>
                <div className="hero-icons mt-4">
                    <div className="row">
                        <div className="col-4 col-md-4 col-lg-3">
                        <i class="bi bi-bag-dash-fill text-main hero-icon"></i>
                        <h3 className="card-heading text-white fw-normal">Carts</h3>
                        </div>
                        <div className="col-4 col-md-4 col-lg-3">
                        <i class="bi bi-cake2 text-main hero-icon"></i>
                        <h3 className="card-heading text-white fw-normal">Events</h3>
                        </div>
                        <div className="col-4 col-md-4 col-lg-3">
                        <i class="bi bi-droplet hero-icon text-main"></i>
                        <h3 className="card-heading text-white fw-normal">Fresh</h3>
                        </div>
                    </div>
                </div>
                <button className='hero-btn main-btn mt-4'>Explore Food</button>
                
            </div>
        </div>
        <div className="col-12 col-md-12 col-lg-5">
            <div className="hero-image">
                <img src="https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/N2HMMGN-2.png" alt="" className="w-100 fluid-image" />
                <div className="blur"></div>
            </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default HeroHome
