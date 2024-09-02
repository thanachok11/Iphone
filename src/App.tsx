import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import MenuItemDetail from './MenuItemDetail';
import iphoneImage from './iPhone 15 Pro - Black Titanium - Portrait.png'; // Adjust path as needed
import statusBarImage from './Status Bar.png'; // Adjust path as needed
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="iphone-15-pro-max">
        <div className="status-bar">
          <img src={statusBarImage} alt="Status Bar" className="status-bar-image" />
        </div>
        <div className="iphone-screen-content">
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/menu/:id" element={<MenuItemDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
