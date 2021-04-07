import { useEffect, useMemo, useState } from 'react';
import { githubApi } from 'api/github.api';
import { Project, User } from 'entities';
import { ownerFactory } from 'factories/ownerFactory';
import { projectFactory } from 'factories/projectFactory';
import { userFactory } from 'factories/userFactory';
import { Git } from 'value-objects';

export const useGitHub = () => {
  const [username, setUsername] = useState('');
  const [projects, setProjects] = useState([] as Project[]);
  const [user, setUser] = useState(null as User | null | undefined);
  
  const service = useMemo(() => githubApi(username), [username]);
  
  useEffect(() => {
    const gitToProject = (i: Git) => {
      const owner = ownerFactory(i.owner.login, i.owner.avatar_url);
      return projectFactory(
        i.name,
        i.description,
        i.language||'nolang',
        i.html_url,
        owner
      );
    };

    if(username.trim()!== ''){
      service.getUser()
        .then(async gitUser => gitUser.map(userFactory).shift())
        .then(user => {
          setUser(user);
          document.title = `Portifólio | ${user?.name}`;
        })
        .catch(console.error)
        .finally(() => console.log('user loaded!'));
      
      service.getProjects()
        .then(async gitProj => gitProj.map(gitToProject))
        .then(setProjects)
        .catch(console.error)
        .finally(() => console.log('loaded!'));
    } else {
      import('config/config.json')
        .then(i=>setUsername(i.github_username))
        .catch(console.error);
    }
  }, [username]);

  return {
    projects,
    user
  };
};
