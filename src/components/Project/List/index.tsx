import React, { useMemo } from 'react';
import { Project } from 'entities';
import { Item } from '../Item';

export const List = ({projects}: {projects: Project[]}) => {
  const renderProjectList = useMemo(() => {
    return projects.map((i, index) => {
      return (
        <Item 
          key={index}
          name={i.name} 
          description={i.description} 
          language={i.language}
          link={i.link}
          owner={i.owner}
        />
      );
    });
  }, [projects]);
  return (
    <>
      <h2 className="text-3xl py-12 font-bold">Projects I&apos;m working on</h2>
      <div className="bg-gray-100 pb-5 gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {renderProjectList}
      </div>
    </>
  );
};
