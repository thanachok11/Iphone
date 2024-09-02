import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css';

const MenuItemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const menuItems = [
    { id: 1, name: "Burger", price: "$5.99", description: "A juicy grilled burger with lettuce, tomato, and cheese." },
    { id: 2, name: "Fries", price: "$2.99", description: "Crispy golden fries with a hint of salt." },
    { id: 3, name: "Soda", price: "$1.99", description: "A refreshing fizzy drink." },
    { id: 4, name: "Ice Cream", price: "$3.99", description: "Creamy vanilla ice cream with chocolate syrup." },
  ];

  const item = menuItems.find((item) => item.id.toString() === id);

  if (!item) {
    return <p>Menu item not found!</p>;
  }

  return (
    <div className="menu-detail">
      <h2>{item.name}</h2>
      <p>{item.price}</p>
      <p>{item.description}</p>
      <Link to="/" className="back-link">Back to Menu</Link>
    </div>
  );
};

export default MenuItemDetail;
