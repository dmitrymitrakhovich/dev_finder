import { GithubUser, LocalGuthubUser } from './../types/user';

export const extractLocalUser = (user: GithubUser): LocalGuthubUser => {
  return {
    avatar: user.avatar_url,
    bio: user.bio,
    blog: user.blog,
    company: user.company,
    created: user.created_at,
    followers: user.followers,
    following: user.following,
    location: user.location,
    login: user.login,
    name: user.name,
    repos: user.public_repos,
    twitter: user.twitter_username,
  };
};
