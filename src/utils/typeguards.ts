import { GithubUser } from './../types/user';

export const isGithubUser = (user: object): user is GithubUser => {
  return 'id' in user;
};
