import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
    this.retrieveList()
  }
  
  retrieveList() {
    $.ajax({
      url: '/items',
      contentType: 'application/json',
      success: (val) => {
        this.setState({
          list: val.fulfillmentValue
        })
      }
    })
  }
  onAddItem(item) {
    let $tmp = this.state.list.slice();
    item.id = $tmp.length + 1;
    $tmp.push(item);
    this.setState({
      list: $tmp
    })
  }

  
  render () {
    return (
      <div>
     <AddGrocery onAddItem={this.onAddItem.bind(this)} />
    <GroceryList groceries={this.state.list} />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));