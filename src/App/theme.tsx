import React, { PropsWithChildren } from 'react';
import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { NavBar } from 'components/Nav';
import 'tailwindcss/tailwind.css';

const Theme = (props: PropsWithChildren<{}>) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar/>
      <Container>
        {props?.children}
      </Container>
      <Footer/>
    </div>
  );
};

export default Theme;
