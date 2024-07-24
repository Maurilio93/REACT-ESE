import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useGithubUsers() {
  const { data, error } = useSWR('https://api.github.com/users', fetcher);

  return {
    users: data,
    error,
    isLoading: !data && !error,
  };
}
