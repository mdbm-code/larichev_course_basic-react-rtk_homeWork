import styles from './CatalogItem.module.css';
import cn from 'classnames';

const CatalogItem = ({ item, toggleFavorite }) => {
  return (
    <div className={styles['card']}>
      <div className={styles['card-media']}>
        <div className={styles['rating']}>
          <img className={styles['rating-icon']} src="./star.svg" alt="star" />
          <div className={styles['rating-value']}>{item.rating}</div>
        </div>
        <a href="!#">
          <img className={styles['poster']} src={item.image} alt={item.title} />
        </a>
      </div>
      <div className={styles['card-content']}>
        <a className={styles['navlink']} href="!#">
          {item.title}
        </a>
        <div
          className={styles['action']}
          onClick={() => toggleFavorite(item.id)}
        >
          <img
            className={styles['action-icon']}
            src={item.favorite === 0 ? './thumb.svg' : './bookmark.svg'}
            alt="icon"
          />
          <div
            className={cn(
              styles['btn-favorite'],
              styles[`fav-${item.favorite}`]
            )}
          >
            {item.favorite === 0 ? 'В избранное' : 'В избранном'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
