import React from 'react';

const ItemFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-info">
        Все
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Активны
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Закрыты
      </button>
    </div>
  );
};
export default ItemFilter;
