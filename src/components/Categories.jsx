import React from 'react';
import '../styles/categories.css'
const categories = [
  {
    title: "FOOD",
    desc: "Lorem ipsum dolor sit.",
    image: "https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/cheeseburger.png",
    color: "yellow"
  },
  {
    title: "SNACK",
    desc: "Lorem ipsum dolor sit.",
    image: "https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/QCFS4BS-x.png",
    color: "green"
  },
  {
    title: "BEVERAGES",
    desc: "Lorem ipsum dolor sit.",
    image: "https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/08/PNNSUD7-2.png",
    color: "red"
  }
];

function Categories() {
  return (
    <section className='categories container mt-5'>
      <div className="row">
        {categories.map((item, index) => (
          <div className="col-12 col-md-12 col-lg-4" key={index}>
           <div className={`${item.color} categorie-card d-flex mt-3`}>
            <div className="categorie-img">
                <img src={item.image} alt=""  className='w-100'/>
            </div>
           <div >
              <h3 className="card-heading text-white">{item.title}</h3>
              <p className="p-small text-white">{item.desc}</p>
              <p className="text-white">Buy Online</p>
            </div>
           </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
