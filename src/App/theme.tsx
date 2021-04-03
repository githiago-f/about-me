import React, { PropsWithChildren } from 'react';
import { StyledBase } from 'components/StyledBase';
import 'tailwindcss/tailwind.css';

const Theme = (props: PropsWithChildren<{}>) => {
  return (
    <>
      {props?.children}
      <StyledBase />
    </>
  );
};

export default Theme;
