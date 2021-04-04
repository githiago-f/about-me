import { Project } from 'entities';

type ProjectFactory = (
  name: string, 
  description: string, 
  language: string, 
  link: string) => Project;

export const projectFactory: ProjectFactory = (name, description, language, link) => ({
  name,
  description,
  language,
  link
});
