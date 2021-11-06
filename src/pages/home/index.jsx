import RecipeList from '../../components/recipe-list';
import { useFetchRecipes } from '../../hooks/useFetchRecipes';
import './Home.css';

export default function Home() {
  const { data, isLoading, error, isError } = useFetchRecipes();

  if (isLoading) return <div className="loading">Loading...</div>;

  if (!isLoading && isError)
    return <div className="error">{error.message}</div>;

  return <div className="home">{data && <RecipeList recipes={data} />}</div>;
}
