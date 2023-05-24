import { githubAPI } from '../utils/consts';

const fetchUserByUsername = async username => {
  const response = await fetch(`${githubAPI}/users/${username}`);
  const user = await response.json();
  return user;
}

export { fetchUserByUsername as fetchProfileInformation }