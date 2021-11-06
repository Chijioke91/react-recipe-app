import RecipeList from '../../components/recipe-list';
import { useFetchRecipes } from '../../hooks/useFetchRecipes';
import './Home.css';

export default function Home() {
  const { data, isLoading, error, isError } = useFetchRecipes();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>{error.message}</div>;

  return <div className="home">{data && <RecipeList recipes={data} />}</div>;
}
