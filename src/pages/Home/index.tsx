import React from 'react';
import Project from 'components/Project';
import { useGitHub } from './hooks';

export const Home = () => {
  const { projects } = useGitHub('githiago-f');
  return (
    <>
      <Project.List projects={projects}/>
    </>
  );
};
