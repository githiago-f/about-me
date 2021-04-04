import React from 'react';
import { Project } from 'entities';

export const Item = ({name, description}: Project) => (
  <div data-testid="item" className="w-100">
    <div className="bg-white w-100 p-3 rounded-lg">
      <h3 translate="no">{name}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  </div>
);
