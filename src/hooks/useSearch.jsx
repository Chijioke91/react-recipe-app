import { useQuery } from 'react-query';

const searchRecipe = async ({ queryKey }) => {
  const res = await fetch(`http://localhost:9001/recipes?q=${queryKey[1]}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  return res.json();
};

export const useSearch = (query) => {
  return useQuery(['recipe', query], searchRecipe);
};
