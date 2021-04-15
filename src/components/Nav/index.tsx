import React from 'react';

export const NavBar = () => {
  return (
    <nav className="bg-white w-100 shadow p-4 fixed left-0 top-0 right-0">
      <div className="flex justify-between">
        <a href="/about-me">
          <h3 className="font-bold p-1">
            Portifólio <span className="bg-blue-600 px-2 text-white rounded-md">dev</span>
          </h3>
        </a>
      </div>
    </nav>
  );
};
