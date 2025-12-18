import React, { useState } from 'react';
import MenuList from './MenuList';

function MenuItem({ item }) {
  const [displayCurrent, setDisplayCurrent] = useState({});

  function handleToggleChildren(getId) {
    setDisplayCurrent({
      ...displayCurrent,
      [getId]: !displayCurrent[getId]
    });
  }

  const hasChildren = item && item.children && item.children.length;

  return (
    <li className="list-none">
      <div
        className={`flex items-center justify-between py-2 px-3 rounded-md transition-colors duration-200 ${hasChildren ? 'hover:bg-gray-100 cursor-pointer' : ''
          }`}
      >
        <p className="text-gray-800 font-medium text-sm select-none">
          {item.label}
        </p>
        {hasChildren ? (
          <span
            onClick={() => handleToggleChildren(item.id)}
            className="flex items-center justify-center w-6 h-6 text-gray-600 font-bold text-lg transition-transform duration-200"
          >
            {displayCurrent[item.id] ? '−' : '+'}
          </span>
        ) : null}
      </div>
      {item && item.children && item.children.length > 0 && displayCurrent[item.id] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;