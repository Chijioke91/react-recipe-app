import { useFetchRecipe } from '../../hooks/useFetchRecipe';
import { useParams } from 'react-router-dom';
import './Recipe.css';

export default function Recipe() {
  const { id } = useParams();

  const { data: recipe, isLoading, error, isError } = useFetchRecipe(id);

  if (isLoading) return <div className="loading">Loading...</div>;

  if (!isLoading && isError)
    return <div className="error">{error.message}</div>;

  return (
    <div className="recipe">
      <>
        <h2 className="page-title">{recipe.title}</h2>
        <p>Takes {recipe.cookingTime} to cook.</p>
        <ul>
          {recipe.ingredients.map((ing) => (
            <li key={ing}>ing</li>
          ))}
        </ul>
        <p className="method">{recipe.method}</p>
      </>
    </div>
  );
}
