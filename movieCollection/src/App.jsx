import AppBar from './components/AppBar/AppBar';
import SearchForm from './components/SearchForm/SearchForm';
import Catalog from './components/Catalog';
import AuthForm from './components/AuthForm/AuthForm';

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
