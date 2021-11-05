import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Recipe from './pages/recipe';
import Create from './pages/create';
import Search from './pages/search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipes/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
