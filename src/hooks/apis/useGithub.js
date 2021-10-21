import useSWR from "swr";
import fetcher from "./fetcher";

function useGithub() {
  const { data, error } = useSWR(
    `https://api.github.com/users/NoelBank/repos?per_page=6&sort=updated`,
    fetcher
  );

  return {
    githubData: data,
    githubIsLoading: !error && !data,
    githubIsError: error,
  };
}

export default useGithub;
