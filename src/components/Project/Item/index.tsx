import React from 'react';
import { Project } from 'entities';
import { ProgramingLanguage } from 'components/ProgramingLanguage';

export const Item = (props: Project) => (
  <div data-testid="item" className="w-100">
    <div className="bg-white w-100 p-3 rounded-lg shadow">
      <div>
        <img 
          src={`https://via.placeholder.com/300x300?text=${props.language}`}
          alt="Project's thumbnail"
          loading="lazy"
          className="object-cover h-48 w-full rounded-sm"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex space-x-2 py-3">
          <img
            src={props.owner.avatar}
            alt={props.owner.name}
            width="32"
            height="32"
            className="rounded-full object-contain border-purple-800 border-2"
            title={props.owner.name}
            loading="lazy"
          />
          <h3
            className="font-medium text-2xl truncate" 
            translate="no"
          >{props.name}</h3>
        </div>
        <p className="text-gray-500 text-sm py-2 truncate">
          {props.description}
        </p>
        <hr/>
        <div className="flex flex-row justify-between pt-2">
          <ProgramingLanguage language={props.language as any}/>
          <div className="flex flex-row-reverse">
            <a 
              className="p-2 focus:bg-gray-400 hover:bg-gray-300 rounded-md" 
              href={props.link}
            >
              View project
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
