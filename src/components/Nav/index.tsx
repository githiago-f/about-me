import { Language } from 'components/Language';
import React from 'react';

type Props = {
  user?: {
    name: string;
  }
}

export const NavBar = ({user}: Props) => {
  return (
    <nav className="bg-white w-100 shadow p-4 fixed left-0 top-0 right-0">
      <div className="flex justify-between">
        <a href="/">
          <h3 className="font-bold">
            {user?.name || 'Thiago Farias Dutra'}
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
          <Language/>
        </div>
      </div>
    </nav>
  );
};
