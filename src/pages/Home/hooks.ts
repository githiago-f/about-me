import { githubApi } from 'api/github.api';
import { Project } from 'entities';
import { ownerFactory } from 'factories/ownerFactory';
import { projectFactory } from 'factories/projectFactory';
import { useEffect, useMemo, useState } from 'react';
import { Git } from 'value-objects';

export const useGitHub = (user: string) => {
  const service = useMemo(() => githubApi(user), []);
  const [projects, setProjects] = useState([] as Project[]);

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

    service.getProjects()
      .then(async gitProj => gitProj.map(gitToProject))
      .then(setProjects)
      .catch(console.error)
      .finally(() => console.log('loaded!'));
  }, []);

  return {
    projects
  };
};
