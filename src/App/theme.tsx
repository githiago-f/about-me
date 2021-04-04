import { Container } from 'components/Container';
import { NavBar } from 'components/Nav';
import React, { PropsWithChildren } from 'react';
import 'tailwindcss/tailwind.css';

const Theme = (props: PropsWithChildren<{}>) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar/>
      <Container>
        {props?.children}
      </Container>
    </div>
  );
};

export default Theme;
