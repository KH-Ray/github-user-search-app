import axios from "axios";

const baseUrl = `https://api.github.com/users`;

const getGithubAccount = (username: string) => {
  return axios.get(`${baseUrl}/${username}`).then((res) => res.data);
};

export { getGithubAccount };
