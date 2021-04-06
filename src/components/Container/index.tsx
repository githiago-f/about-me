import React, { PropsWithChildren } from 'react';

export const Container = (props: PropsWithChildren<{}>) => (
  <div className="content">
    <div className="w-full sm:w-11/12 md:w-5/6 mx-auto px-3">
      {props.children}
    </div>
  </div>
);
