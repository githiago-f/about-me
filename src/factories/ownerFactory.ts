import { Owner } from 'entities';

export const ownerFactory = (name: string, avatar: string) => ({
  name,
  avatar
} as Owner);
