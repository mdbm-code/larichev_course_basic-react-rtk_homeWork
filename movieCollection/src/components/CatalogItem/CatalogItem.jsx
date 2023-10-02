import './CatalogItem.css';

const CatalogItem = ({ item, toggleFavorite }) => {
  return (
    <div className="card">
      <div className="card-media">
        <div className="rating">
          <img className="rating-icon" src="./star.svg" alt="star" />
          <div className="rating-value">{item.rating}</div>
        </div>
        <a href="!#">
          <img className="poster" src={item.image} alt={item.title} />
        </a>
      </div>
      <div className="card-content">
        <a className="navlink" href="!#">
          {item.title}
        </a>
        <div className="action" onClick={() => toggleFavorite(item.id)}>
          <img
            className="action-icon"
            src={item.favorite === 0 ? './thumb.svg' : './bookmark.svg'}
            alt="icon"
          />
          <div className={`btn-favorite fav-${item.favorite}`}>
            {item.favorite === 0 ? 'В избранное' : 'В избранном'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
