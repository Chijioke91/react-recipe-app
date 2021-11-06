import { useQuery, useMutation, useQueryClient } from 'react-query';
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

const addRecipe = async (recipe) => {
  try {
    await db.collection('recipes').add(recipe);
  } catch (e) {
    throw new Error(e.message);
  }
};

const updateRecipe = async (id) => {
  try {
    await db
      .collection('recipes')
      .doc(id)
      .update({ title: 'An updated Title' });
  } catch (e) {
    throw new Error(e.message);
  }
};

const deleteRecipe = async (id) => {
  try {
    await db.collection('recipes').doc(id).delete();
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

export const useFetchRecipe = (id) => {
  return useQuery(['recipes', id], fetchRecipe);
};

export const useUpdateRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation((id) => updateRecipe(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('recipes');
    },
  });
};

export const useDeleteRecipe = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation((id) => deleteRecipe(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('recipes');
      navigate('/', { replace: true });
    },
  });
};
