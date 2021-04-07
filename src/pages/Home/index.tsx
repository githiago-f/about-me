import React from 'react';
import Project from 'components/Project';
import { useGitHub } from './hooks';
import { Avatar } from 'components/Avatar';

export const Home = () => {
  const { projects, user } = useGitHub();
  return (
    <>
      <div hidden={!user}>
        {(user && <Avatar user={user} />)}
      </div>
      <Project.List
        projects={projects}
      />
    </>
  );
};
