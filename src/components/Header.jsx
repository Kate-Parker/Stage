import React from 'react';
import { FaBars, FaSearch, FaExchangeAlt, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700">Help Center</a>
            <a href="#" className="text-gray-700">Today's Deal</a>
            <a href="#" className="text-gray-700">Order Tracking</a>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Get Upto 25% Cashback On First Order: GET25OFF</span>
            <a href="shop.html" className="bg-blue-500 text-white py-1 px-3 rounded">SHOP NOW</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <img src="logo.png" alt="EcoMed Logo" className="w-12" />
          <h1 className="text-2xl font-bold">EcoMed</h1>
        </div>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Rechercher..." className="border rounded py-2 px-4" />
          <FaSearch className="text-gray-700" />
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700">Connexion</a>
          <span className="text-gray-700">/</span>
          <a href="#" className="text-gray-700">Inscription</a>
        </div>
        <div className="flex space-x-4">
          <FaExchangeAlt className="text-gray-700" />
          <FaHeart className="text-gray-700" />
          <FaShoppingCart className="text-gray-700" />
          <FaUser className="text-gray-700" />
        </div>
      </div>
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="relative group">
            <button className="flex items-center text-gray-700"><FaBars /> Acheter par catégorie</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg">
              <a href="#" className="block px-4 py-2">Catégorie 1</a>
              <a href="#" className="block px-4 py-2">Catégorie 2</a>
              <a href="#" className="block px-4 py-2">Catégorie 3</a>
              <a href="#" className="block px-4 py-2">Catégorie 4</a>
              <a href="#" className="block px-4 py-2">Catégorie 5</a>
            </div>
          </div>
          <nav className="flex space-x-4">
            <a href="page1.html" className="text-gray-700">Medical supplies</a>
            <a href="page2.html" className="text-gray-700">Thermometer</a>
            <a href="page3.html" className="text-gray-700">Today's Deal</a>
            <a href="page4.html" className="text-gray-700">Toutes Les Marques</a>
            <a href="page5.html" className="text-gray-700">Suite</a>
          </nav>
          <div className="flex space-x-4">
            <button className="dropbtn">Langue</button>
            <button className="dropbtn">Monnaie</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
