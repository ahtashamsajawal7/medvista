// import React, { useContext, useState } from 'react';
import React, { useContext, useEffect, useState } from 'react'
// import './shop.css';
import './Shop.css';
import { StoreContext } from '../../components/context/StoreContext';
// import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import MedicineItem from '../MedicineItem/MedicineItem';
import MedicineItem from '../../components/MedicineItem/MedicineItem';

const Shop = () => {
  const { medicine_list } = useContext(StoreContext);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Pain Relief',
    'Antibiotics',
    'Cough Syrup',
    'Vitamins',
    'Antiseptics',
    'Allergy',
    'Cold & Flu',
  ];

  const filteredMedicines =
    selectedCategory === 'All'
      ? medicine_list
      : medicine_list.filter(
          (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="product-container">
      {/* Sidebar with Categories */}
      <div className="sidebar">
        <h2>Categories</h2>
        <ul id="category-list">
          {categories.map((category) => (
            <li
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area with Medicines */}
      <div className="product-section">
        <h2>{selectedCategory} Medicines</h2>
        <div className="product-grid">
          {filteredMedicines.map((item, index) => (
            <div className="product-card" key={index}>
              <MedicineItem
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
              {/* Display additional information */}
              <div className="medicine-item-details">
                <p>
                  <strong>Expiry Date:</strong>{' '}
                  {item.expiryDate
                    ? new Date(item.expiryDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    : 'N/A'}
                </p>
                <p>
                  <strong>Available Quantity:</strong> {item.quantity ? item.quantity : 'N/A'}
                </p>
              </div>
              {/* Donation Tag */}
              {item.price === 0 && <div className="donation-tag">🎗️ Donation</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;