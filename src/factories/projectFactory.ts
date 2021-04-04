import { Owner, Project } from 'entities';

type ProjectFactory = (
  name: string, 
  description: string, 
  language: string, 
  link: string,
  owner: Owner) => Project;

export const projectFactory: ProjectFactory = (name, description, language, link, owner) => ({
  name,
  description,
  language,
  link,
  owner
});
