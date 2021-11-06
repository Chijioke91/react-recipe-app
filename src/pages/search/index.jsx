import { useSearchParams } from 'react-router-dom';
import RecipeList from '../../components/recipe-list';
import { useSearch } from '../../hooks/useSearch';

export default function Search() {
  let [searchParams] = useSearchParams();

  const query = searchParams.get('q');

  const { data, error, isLoading, isError } = useSearch(query);

  if (isLoading) return <div className="loading">Loading...</div>;

  if (!isLoading && isError)
    return <div className="error">{error.message}</div>;

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
