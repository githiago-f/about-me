import { githubApi } from 'api/github.api';
import { Project, User } from 'entities';
import { ownerFactory } from 'factories/ownerFactory';
import { projectFactory } from 'factories/projectFactory';
import { userFactory } from 'factories/userFactory';
import { useEffect, useMemo, useState } from 'react';
import { Git } from 'value-objects';

export const useGitHub = (username: string) => {
  const service = useMemo(() => githubApi(username), []);
  const [projects, setProjects] = useState([] as Project[]);
  const [user, setUser] = useState(null as User | null | undefined);

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

    service.getUser()
      .then(async gitUser => gitUser.map(userFactory).shift())
      .then(setUser)
      .catch(console.error)
      .finally(() => console.log('user loaded!'));

    service.getProjects()
      .then(async gitProj => gitProj.map(gitToProject))
      .then(setProjects)
      .catch(console.error)
      .finally(() => console.log('loaded!'));
  }, []);

  return {
    projects,
    user
  };
};
