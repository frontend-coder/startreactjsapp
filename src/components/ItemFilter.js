import React, { Component } from 'react';



export default class ItemFilter extends Component {
  render() {
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
  }
}
 