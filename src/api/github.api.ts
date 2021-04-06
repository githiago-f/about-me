import { GitUser, Git } from 'value-objects';

export const githubApi = (user: string) => {
  const base = 'https://api.github.com';

  const getUser = async () => {
    const request = await fetch(`${base}/users/${user}`);
    const res = await request.json() as GitUser;
    return [res];
  };

  const getProjects = async () => {
    const request = await fetch(`${base}/users/${user}/repos`);
    const repos = await request.json() as Git[];
    return repos;
  };

  return {
    getProjects,
    getUser
  };
};
