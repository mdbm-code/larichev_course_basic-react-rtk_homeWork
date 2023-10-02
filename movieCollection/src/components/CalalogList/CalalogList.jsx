import CatalogItem from '../CatalogItem/CatalogItem';
import './CalalogList.css';

const CalalogList = ({ data, toggleFavorite }) => {
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="catalog-list">
      {data.map((item) => (
        <CatalogItem
          key={item.id}
          item={item}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default CalalogList;
