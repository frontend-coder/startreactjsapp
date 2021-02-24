import React from 'react';
import './items-list-items.css';

export default class ItemsListItems extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     done: false,
  //   };
  // }

  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    // console.log(`ВЫполнено^ ${this.props.label}`);
    this.setState({ done: true });
  };
  onMarkImportant = () => {
    // console.log(`ВЫполнено^ ${this.props.label}`);
    this.setState({ important: true });
  };
  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    let todoListItem = 'todo-list-item';
    if (done) {
      todoListItem += ' done';
    }
    if (important) {
      todoListItem += ' important';
    }
    // const style = {
    //   color: important ? 'tomato' : 'black',
    //   fontWeight: important ? 'bold' : 'normal',
    // };
    return (
      <span className={todoListItem}>
        <span className="items-list-items" onClick={this.onLabelClick}>
          {label}
        </span>

        <button type="button" className="btn btn-outline-success btn-sm" onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>
        <button type="button" className="btn btn-outline-success btn-sm">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

// const ItemsListItemsFunc = ({ label, important = false }) => {
//   const style = {
//     color: important ? 'tomato' : 'black',
//     fontWeight: important ? 'bold' : 'normal',
//   };
//   return (
//     <span className="todo-list-item">
//       <span className="items-list-items" style={style}>
//         {label}
//       </span>

//       <button type="button" className="btn btn-outline-success btn-sm">
//         <i className="fa fa-exclamation" />
//       </button>
//       <button type="button" className="btn btn-outline-success btn-sm">
//         <i className="fa fa-trash-o" />
//       </button>
//     </span>
//   );
// };

//export default ItemsListItems;
