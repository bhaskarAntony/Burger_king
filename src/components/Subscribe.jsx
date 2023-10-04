import React from 'react'
import '../styles/subscribe.css'

function Subscribe() {
  return (
    <section className='subscribe container mt-5 rounded-4 p-5'>
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-12 col-lg-5">
                <div className="subscribe-text text-center">
                    <h2 className="text-black fw-bold">GET EXCLUSIVE UPDATE</h2>
                    <p className="p-small text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-7">
                <div className="subscribe-form">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-8">
                            <input type="text" className="form-control border-0 bg-tranparent fs-5 p-3 mb-2" placeholder='Email'/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center">
                            <button className="btn bg-black text-white rounded-2 p-3 px-4 mb-2 hero-btn"><i class="bi bi-send-fill mx-1"></i>Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Subscribe
