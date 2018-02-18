import React from 'react';

const GroceryItem = (props) => (
  <div>{props.grocery.description} { props.grocery.quantity }</div>
)

export default GroceryItem;