import { useReducer } from 'react';
import { INITIAL_STATE, catalogReducer } from '../../store/catalogReducer';
import CalalogList from './CalalogList/';

const Catalog = () => {
  //eslint-disable-next-line
  const [data, dispatchData] = useReducer(catalogReducer, INITIAL_STATE);

  const toggleFavorite = (itemId) => {
    console.log('change favorite flag for', itemId);
  };

  return (
    <div className="content-section">
      <CalalogList data={data} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default Catalog;
