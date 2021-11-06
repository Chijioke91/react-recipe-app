import { useQuery } from 'react-query';
import { db } from '../firebase/config';

const fetchRecipes = async () => {
  try {
    const snapshots = await db.collection('recipes').get();

    if (snapshots.empty) {
      throw new Error('Could not fetch recipes');
    }

    let results = [];

    snapshots.docs.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });

    return results;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const useFetchRecipes = () => {
  return useQuery('recipes', fetchRecipes);
};
