import { useQuery } from 'react-query';

const fetchRecipe = async ({ queryKey }) => {
  const res = await fetch(`http://localhost:9001/recipes/${queryKey[1]}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    throw new Error('Could not fetch data');
  }

  return res.json();
};

export const useFetchRecipe = (id) => {
  return useQuery(['recipes', id], fetchRecipe);
};
