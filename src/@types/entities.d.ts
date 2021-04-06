declare module 'entities' {
  type Project = {
    name: string;
    description: string;
    language: string;
    link: string;
    owner: OwnerMiniature;
  }

  type OwnerMiniature = {
    name: string;
    avatar: string;
  }

  type User = {
    name: string;
    avatar: string;
    link: string;
    bio: string;
    at: string;
  }
}
