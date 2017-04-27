import React from 'react'
import ProductRow from './ProductRow'

module.exports = React.createClass({

  getInitialState: function() {
    return { summary: 0,
             handleChange: this.handleChange
           }
  },
  handleChange(diff) {
   let sum = this.state.summary + diff;
   this.setState(prevState => ({ summary: sum}));      
  },
  
  render() {
    var rows = [];
    console.log(this.props.inStockOnly)
    this.props.products.forEach((product) => {
      rows.push(<ProductRow product={product} handleChange={this.handleChange} key={product.name} />);
    });
  const tableStyle = {
       "border": "1px solid black"
    };  
    const headerStyle = {
       'width':150,  'textAlign': 'center'
    };
    let sum =(Number(Math.round(this.state.summary*100 )+'e2')+'e-2')/100;
    return (
      <div>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerStyle}>Name</th>
              <th style={headerStyle}>Price</th>            
              <th style={headerStyle}>Special qty</th>
              <th style={headerStyle}>Special price</th>
              <th style={headerStyle}></th>
              <th style={headerStyle}></th>
              <th style={headerStyle}>Quantaty</th>
              <th style={headerStyle}>Total</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <h1>Summary:  {(this.state.summary != 0 && this.state.summary ? sum : '')}</h1>
      </div>
    );
  }
})