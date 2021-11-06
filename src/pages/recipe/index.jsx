import { useFetchRecipe, useUpdateRecipe } from '../../hooks/useFetchRecipe';
import { useParams } from 'react-router-dom';
import './Recipe.css';
import useTheme from '../../hooks/useTheme';

export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();

  const { data: recipe, isLoading, error, isError } = useFetchRecipe(id);
  const { mutate: updateRecipe } = useUpdateRecipe(id);

  if (isLoading) return <div className="loading">Loading...</div>;

  if (!isLoading && isError)
    return <div className="error">{error.message}</div>;

  const handleUpdate = () => updateRecipe(id);

  return (
    <div className={`recipe ${mode}`}>
      <h2 className="page-title">{recipe.title}</h2>
      <p>Takes {recipe.cookingTime} to cook.</p>
      <ul>
        {recipe.ingredients.map((ing) => (
          <li key={ing}>ing</li>
        ))}
      </ul>
      <p className="method">{recipe.method}</p>
      <button onClick={handleUpdate}>Update me</button>
    </div>
  );
}
