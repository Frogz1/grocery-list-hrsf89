import React from 'react';


class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      description: '',
      quantity: 0
    }
  }
  onChange(e) {
    this.setState({
      description: e.target.value
    });
  }
  onClick() {
    let item = {
      description: this.state.description,
      quantity: this.state.quantity
    };
    
    this.props.onAddItem(item);
    this.setState({
      description: '',
      quantity: 0
    });


  }

  render () {
    return (
      <div>
      Description: <input type="text" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})  } /><br />
      Quantity: <input type="text" value={this.state.quantity} onChange={(e) => this.setState({quantity: parseInt(e.target.value)})  } />

      <button onClick={this.onClick.bind(this)}>Add Grocery</button>
      </div>
    )
  }
}

export default AddGrocery;

