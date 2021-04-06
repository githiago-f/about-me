import { OwnerMiniature, Project } from 'entities';

type ProjectFactory = (
  name: string, 
  description: string, 
  language: string, 
  link: string,
  owner: OwnerMiniature) => Project;

export const projectFactory: ProjectFactory = (name, description, language, link, owner) => ({
  name,
  description,
  language,
  link,
  owner
});
