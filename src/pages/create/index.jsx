import { useRef, useState } from 'react';
import { useAddRecipe } from '../../hooks/useFetchRecipe';
import './Create.css';

export default function Create() {
  const [formData, setFormData] = useState({
    title: '',
    method: '',
    time: '',
    newIngredient: '',
  });

  const ingredientRef = useRef(null);

  const [ingredients, setIngredients] = useState([]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const { title, method, time, newIngredient } = formData;

  const { mutate } = useAddRecipe();

  const onSubmit = (e) => {
    e.preventDefault();

    const recipe = {
      title,
      ingredients,
      method,
      cookingTime: `${time} minutes`,
    };

    mutate(recipe);
  };

  const onAdd = (e) => {
    e.preventDefault();

    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((previousIngredients) => [...previousIngredients, ing]);
    }

    setFormData({ ...formData, newIngredient: '' });
    ingredientRef.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={onSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            id="title"
            value={title}
            onChange={onChange}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              id="newIngredient"
              value={newIngredient}
              onChange={onChange}
              ref={ingredientRef}
            />
            <button className="btn" onClick={onAdd}>
              add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:{' '}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <label>
          <span>Recipe Method:</span>
          <textarea id="method" value={method} onChange={onChange} required />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            id="time"
            value={time}
            onChange={onChange}
            required
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  );
}
