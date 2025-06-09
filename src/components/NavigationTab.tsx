import React from 'react';

const NavigationTab = ({ page, index, currentPage, onClick }) => (
  <button
    onClick={() => onClick(index)}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
      currentPage === index
        ? `bg-gradient-to-r ${page.color} text-white shadow-lg transform scale-105`
        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
    }`}
  >
    {page.icon}
    <span className="font-medium">{page.title}</span>
  </button>
);

export default NavigationTab;