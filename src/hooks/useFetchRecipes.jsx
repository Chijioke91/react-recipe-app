import { useQuery } from 'react-query';

const fetchRecipes = async () => {
  const res = await fetch('http://localhost:9001/recipes', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    throw new Error('Could not fetch data');
  }

  return res.json();
};

export const useFetchRecipes = () => {
  return useQuery('recipes', fetchRecipes);
};
