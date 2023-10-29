import AppBar from './components/AppBar/';
import SearchForm from './components/SearchForm/';
import Catalog from './components/Catalog/';
import AuthForm from './components/AuthForm/';

const App = () => {
  return (
    <div className="app">
      <AppBar />
      <SearchForm />
      <Catalog />
      <AuthForm />
    </div>
  );
};

export default App;
