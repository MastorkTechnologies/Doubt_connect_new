import React from 'react';
import './SideBar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
        {/* Add more categories */}
      </ul>
    </div>
  );
};

export default Sidebar;