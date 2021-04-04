import React, { PropsWithChildren } from 'react';

export const Container = (props: PropsWithChildren<{}>) => (
  <div className="content">
    <div className="w-full sm:w-5/6 mx-auto">
      {props.children}
    </div>
  </div>
);
