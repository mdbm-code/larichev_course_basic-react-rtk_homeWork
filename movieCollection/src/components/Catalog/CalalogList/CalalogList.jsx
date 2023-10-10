import CatalogItem from '../CatalogItem/CatalogItem';
import styles from './CalalogList.module.css';

const CalalogList = ({ data, toggleFavorite }) => {
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles['catalog-list']}>
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
