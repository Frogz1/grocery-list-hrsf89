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
      url: '/test',
      contentType: 'application/json',
      success: (val) => {
        this.setState({
          list: val
        })
      }
    })
  }
  onAddItem(item) {
    let $tmp = this.state.list.slice();
  
    
    $.ajax({
      url: '/items',
      method: 'POST',
      data: JSON.stringify(item),
      contentType: 'application/json',
      success: (data) => {
        if (data) {

          this.retrieveList();
        }
      }
    });
    this.retrieveList();

  }

  
  render () {
    return (
      <div>
     <AddGrocery onAddItem={this.onAddItem.bind(this)} onChange={() => {

     }} />
    <GroceryList groceries={this.state.list} onChange={(e) => {
      
    }} />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));