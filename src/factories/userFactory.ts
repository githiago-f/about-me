import { User } from 'entities';
import { GitUser } from 'value-objects';

type userFactoryFn = (gitUser: GitUser) => User

export const userFactory: userFactoryFn = (gitUser) => ({
  name: gitUser.name,
  avatar: gitUser.avatar_url,
  at: gitUser.login,
  bio: gitUser.bio,
  link: gitUser.html_url
});
