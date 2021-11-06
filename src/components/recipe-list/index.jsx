import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import Trashcan from '../../assets/trashcan.svg';
import './RecipeList.css';
import { useDeleteRecipe } from '../../hooks/useFetchRecipe';

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();
  const { mutate } = useDeleteRecipe();

  if (!recipes.length) return <div className="error">No Recipes Found...</div>;

  const onDelete = (id) => mutate(id);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            className="delete"
            src={Trashcan}
            alt="delete icon"
            onClick={() => onDelete(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
}
