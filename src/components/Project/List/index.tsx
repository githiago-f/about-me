import React from 'react';

export const List = () => (
  <div className="min-h-screen bg-gray-100 p-3 gap-2 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
    <div className="w-100">
      <div className="bg-white w-100 p-3 rounded-lg">
        <h3>Project name</h3>
        <p className="text-gray-500">Descrição do projeto que segue aqui.</p>
      </div>
    </div>
    <div className="w-100">
      <div className="bg-white w-100 p-3 rounded-lg">
        <h3>Project name</h3>
        <p className="text-gray-500">Descrição do projeto que segue aqui.</p>
      </div>
    </div>
    <div className="w-100">
      <div className="bg-white w-100 p-3 rounded-lg">
        <h3>Project name</h3>
        <p className="text-gray-500">Descrição do projeto que segue aqui.</p>
      </div>
    </div>
  </div>
);
