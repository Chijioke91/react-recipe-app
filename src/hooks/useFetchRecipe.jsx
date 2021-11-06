import { useQuery, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';

const fetchRecipe = async ({ queryKey }) => {
  try {
    const doc = await db.collection('recipes').doc(queryKey[1]).get();

    if (!doc.exists) {
      throw new Error('Could not find recipe');
    }

    return doc.data();
  } catch (e) {
    throw new Error(e.message);
  }
};

export const useFetchRecipe = (id) => {
  return useQuery(['recipes', id], fetchRecipe);
};

const addRecipe = async (recipe) => {
  try {
    await db.collection('recipes').add(recipe);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const useAddRecipe = () => {
  const navigate = useNavigate();

  return useMutation(addRecipe, {
    onSuccess: () => {
      navigate('/', { replace: true });
    },
  });
};
