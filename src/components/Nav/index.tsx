import React from 'react';

export const NavBar = () => (
  <nav className="bg-white w-100 shadow p-3 fixed left-0 right-0">
    <div className="flex justify-between">
      <a href="/">
        <h3 className="font-bold">
          Thiago Farias Dutra
        </h3>
      </a>
      <div className="space-x-6">
        <ul className="inline-flex space-x-3">
          <li>
            <a href="#about">
              Sobre
            </a>
          </li>
          <li>
            <a href="#tecnologias">
              Tecnologias
            </a>
          </li>
        </ul>
        <select name="Language" id="language">
          <option>Português</option>
          <option>Inglês</option>
        </select>
      </div>
    </div>
  </nav>
);
