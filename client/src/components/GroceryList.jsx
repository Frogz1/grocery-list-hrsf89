import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => (
  <div className="groceries">
  {
    props.groceries.map((ele, index) => {
      return (
        <GroceryItem grocery={ele} key={ele.id} />
      );
    })
  }
  </div>
)

export default GroceryList;