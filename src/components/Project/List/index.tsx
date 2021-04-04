import { Project } from 'entities';
import { projectFactory } from 'factories/projectFactory';
import React, { useMemo } from 'react';
import { Item } from '../Item';

const projects: Project[] = [
  projectFactory('Projeto 1', 'Descrição do projeto', 'typescript', 'https://google.com'),
  projectFactory('Projeto 2', 'Descrição do projeto', 'typescript', 'https://google.com'),
  projectFactory('Projeto 3', 'Descrição do projeto', 'typescript', 'https://google.com'),
  projectFactory('Projeto 4', 'Descrição do projeto', 'typescript', 'https://google.com'),
  projectFactory('Projeto 5', 'Descrição do projeto', 'typescript', 'https://google.com'),
  projectFactory('Projeto 6', 'Descrição do projeto', 'typescript', 'https://google.com'),
  projectFactory('Projeto 4', 'Descrição do projeto', 'typescript', 'https://google.com'),
  projectFactory('Projeto 5', 'Descrição do projeto', 'typescript', 'https://google.com'),
  projectFactory('Projeto 6', 'Descrição do projeto', 'typescript', 'https://google.com')
];

export const List = () => {
  const renderProjectList = useMemo(() => {
    return projects.map((i, index) => {
      return (
        <Item 
          key={index}
          name={i.name} 
          description={i.description} 
          language={i.language}
          link={i.link}
        />
      );
    });
  }, [projects]);
  return (
    <>
      <h2 className="text-3xl font-bold">Projects I&apos;m working on</h2>
      <div className="bg-gray-100 p-3 gap-2 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
        {renderProjectList}
      </div>
    </>
  );
};
