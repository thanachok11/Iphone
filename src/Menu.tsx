import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Menu: React.FC = () => {
  const menuItems = [
    { id: 1, name: "Burger", price: "$5.99" },
    { id: 2, name: "Fries", price: "$2.99" },
    { id: 3, name: "Soda", price: "$1.99" },
    { id: 4, name: "Ice Cream", price: "$3.99" },
  ];

  return (
    <div className="menu">
      <h2>Fast Food Menu</h2>
      {menuItems.map((item) => (
        <Link key={item.id} to={`/menu/${item.id}`} className="menu-item-link">
          <div className="menu-item">
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
