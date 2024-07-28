import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import faceMask from '../images/n.jpeg';
import supplement from '../images/supplement.jpeg';
import dethol from '../images/s.jpeg';
import lightAlarm from '../images/u.jpeg';
import Testimonials from '../components/Testimonials';
import Brands from '../components/Brands';
import Blog from '../components/Blog';

const banners = [
  { src: faceMask, name: 'Face Mask', price: 30, rating: 4, size: 'M', color: 'White', brand: 'Brand A', condition: 'new' },
  { src: supplement, name: 'Supplement', price: 40, rating: 5, size: 'L', color: 'Yellow', brand: 'Brand B', condition: 'new' },
  { src: dethol, name: 'Dethol', price: 50, rating: 3, size: 'S', color: 'Blue', brand: 'Brand C', condition: 'used' },
  { src: lightAlarm, name: 'Light Alarm', price: 60, rating: 4, size: 'M', color: 'Red', brand: 'Brand A', condition: 'reconditioned' },
];

const Home = () => {
  return (
    <div>
      <section className="hero py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {banners.map((banner, index) => (
              <div className="relative group" key={index}>
                <img src={banner.src} alt={banner.name} className="w-full h-48 object-cover rounded-lg shadow-md" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  {banner.name} <FaArrowRight className="ml-2" />
                </div>
              </div>
            ))}
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
