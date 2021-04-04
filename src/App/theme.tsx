import { NavBar } from 'components/Nav';
import React, { PropsWithChildren } from 'react';
import 'tailwindcss/tailwind.css';

const Theme = (props: PropsWithChildren<{}>) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar/>
      <div className="mt-3">
        {props?.children}
      </div>
    </div>
  );
};

export default Theme;
