declare module 'entities' {
  type Project = {
    name: string;
    description: string;
    language: string;
    link: string;
    owner: Owner;
  }

  type Owner = {
    name: string;
    avatar: string;
  }
}
