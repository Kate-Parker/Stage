import React from 'react';
import faceMask from '../images/n.jpeg';
import supplement from '../images/supplement.jpeg';
import dethol from '../images/s.jpeg';
import lightAlarm from '../images/u.jpeg';
import bp_machine from '../images/bp_machine.jpeg';
import Testimonials from '../components/Testimonials';
import Brands from '../components/Brands';
import Blog from '../components/Blog';

const products  = [
  {
    id: 1,
    title: 'Inlife Heart Care Supplement Vegetarian',
    price: '47,00 $',
    image: faceMask ,
    rating: 4,
    discount: null,
    newPrice: null,
  },

  {
    id: 2,
    title: 'Oxin Nutrition Omega 3 Triple Strength Capsule',
    price: '58,00 $',
    newPrice: '51,04 $',
    discount: '-12%',
    image:  supplement,
    rating: 4,
    isNew: true,
  },

  {
    id: 3,
    title: 'Dettol Germ Protection Handwash Liquid',
    price: '58,00 $',
    newPrice: null,
    discount: null,
    image: dethol,
    rating: 4,
    isNew: true,
  },

  {
    id: 4,
    title: 'TV Night Light Alarm Clock for Patient Desk',
    price: '69,00 $',
    newPrice: '64,17 $',
    discount: '-7%',
    image: lightAlarm ,
    rating: 5,
    isNew: false,
  },
  {
    id: 5,
    title: 'Blood Pressure Machine',
    price: '69,00 $',
    newPrice: '64,17 $',
    discount: '-4%',
    image: bp_machine,
    rating: 5,
    isNew: false,
  },
];

const Home = () => {
  return (
    <div>
      <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Produits Présentés</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-$)` }}>
              {products.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0 md:w-1/5 px-4">
                  <div className="relative group">
                    <img src={product.image} alt={product.title} className="w-full h-60 object-cover rounded-lg shadow-md" />
                    {product.discount && (
                      <div className="absolute top-0 left-0 bg-red-600 text-white text-xs p-1 rounded-br-lg">
                        {product.discount}
                      </div>
                    )}
                    {product.isNew && (
                      <div className="absolute top-0 left-8 bg-green-600 text-white text-xs p-1 rounded-br-lg">
                        NEUF
                      </div>
                    )}
                    <div className="text-left mt-4">
                      <h3 className="text-xl font-bold mt-2">{product.title}</h3>
                      <div className="flex items-center justify-between mt-2">
                        {product.newPrice ? (
                          <div className="text-lg text-green-600">
                            {product.newPrice}
                            <span className="line-through text-gray-500 text-sm ml-2">{product.price}</span>
                          </div>
                        ) : (
                          <div className="text-lg text-green-600">{product.price}</div>
                        )}
                      </div>
                      <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-yellow-500 ${i < product.rating ? 'fas fa-star' : 'far fa-star'}`}></span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
      
      <Testimonials />
      <Brands />
      <Blog />
    </div>
    
  );
};

export default Home;
