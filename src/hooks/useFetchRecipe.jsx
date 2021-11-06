import { useQuery, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

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

const addRecipe = async (recipe) => {
  const res = await fetch('http://localhost:9001/recipes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipe),
  });

  if (!res.ok) {
    throw new Error('Could not create a new recipe');
  }

  return res.json();
};

export const useAddRecipe = () => {
  const navigate = useNavigate();

  return useMutation(addRecipe, {
    onSuccess: () => {
      navigate('/', { replace: true });
    },
  });
};
