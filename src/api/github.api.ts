import { Git } from 'value-objects';


export const githubApi = (user: string) => {
  const base = 'https://api.github.com';

  const getProjects = async () => {
    const request = await fetch(`${base}/users/${user}/repos`);
    const repos = await request.json() as Git[];
    console.log(repos);
    return repos;
  };

  return {
    getProjects
  };
};
