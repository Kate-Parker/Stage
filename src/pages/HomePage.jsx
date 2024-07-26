import React from 'react';
import supplement from '../images/supplement.jpeg';
import dethol from '../images/s.jpeg';
import lightAlarm from '../images/u.jpeg';
import thermo from '../images/ther.jpeg';

const banners = [

{ src: supplement, name: 'Supplement', price: 40, rating: 5, size: 'L', color: 'Yellow', brand: 'Brand B', condition: 'new' },
{ src: dethol, name: 'Dethol', price: 50, rating: 3, size: 'S', color: 'Blue', brand: 'Brand C', condition: 'used' },
{ src: lightAlarm, name: 'Light Alarm', price: 60, rating: 4, size: 'M', color: 'Red', brand: 'Brand A', condition: 'reconditioned' },
{ src: thermo, name: 'thermo', price: 60, rating: 4, size: 'M', color: 'Red', brand: 'Brand A', condition: 'reconditioned' },
];

const Home = () => {
  return (
    <div>
    <section className="hero">
      <div className="container mx-auto">
        <div className="flex justify-between space-x-4">
          {banners.map((banner, index) => (
            <a href={banner.href} className="relative group" key={index}>
              <img src={banner.img} alt={`Image ${index + 1}`} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100">
                {banner.text} <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
      <h2>Welcome to My App</h2>
      <p>This is the home page.</p>
      
    </div>
  );
};

export default Home;
