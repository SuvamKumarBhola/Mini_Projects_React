import React, { useState } from 'react';
import MenuItem from './MenuItem';

function MenuList({ list = [] }) {
  return (
    <ul className="ml-6 mt-2 space-y-1 border-l-2 border-gray-200 pl-4">
      {list && list.length
        ? list.map((listItem, index) => (
          <MenuItem item={listItem} key={`${listItem.id}-${index}`} />
        ))
        : null}
    </ul>
  );
}

export default MenuList;