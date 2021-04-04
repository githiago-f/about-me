import React from 'react';
import { Project } from 'entities';

export const Item = (props: Project) => (
  <div data-testid="item" className="w-100">
    <div className="bg-white w-100 p-3 rounded-lg shadow">
      <div>
        <img 
          src="https://via.placeholder.com/300x300"
          alt="Project's thumbnail"
          loading="lazy"
          className="object-cover h-48 w-full rounded-sm"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="font-medium text-2xl" translate="no">{props.name}</h3>
        <p className="text-gray-500 truncate">{props.description}</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center justify-start">
            <span className="rounded-full p-1 h-1 bg-blue-500"></span>
            &nbsp;
            <span translate="no">{props.language}</span>
          </div>
          <div className="flex flex-row-reverse">
            <a href={props.link}>View project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
