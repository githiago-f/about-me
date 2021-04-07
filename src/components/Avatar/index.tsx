import React from 'react';
import { User } from 'entities';

type Props = {
  user: User;
}

export const Avatar = (props: Props) => (
  <div className="w-full py-10">
    <div className="flex flex-col sm:flex-row space-x-7">
      <div className="flex flex-col-reverse">
        <img
          src={props.user.avatar}
          alt={props.user.name}
          className="rounded-full border-purple-800 border-2 mx-auto sm:mx-0 h-28"
          title={props.user.name}
        />
      </div>
      <div className="flex flex-col justify-center pt-5">
        <a href={props.user.link} className="text-blue-800">@{props.user.at}</a>
        <h2 className="text-4xl font-bold">{props.user.name}</h2>
        <p>{props.user.bio}</p>
      </div>
    </div>
  </div>
);
