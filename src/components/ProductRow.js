import React from 'react'

module.exports = React.createClass({

  getInitialState: function() {
    return {                  
             qty: 0,
             total:0,
             increment: this.increment,
             decrement: this.decrement 
          }
  },
  increment(product) {
    let qty = (this.state.qty+1);
    let oldSum=this.state.total;
    let sum;
    if(qty >= product.special_qty){
      sum =   Number(Math.round(qty*(product.special_price/product.special_qty)+'e2')+'e-2');
      this.setState(prevState => ({ 
                                    total: sum,
                                    qty: qty
                                  }));    
    }
    else {
      sum = qty*product.unit_price;
      this.setState(prevState => ({ total: sum, qty: qty }));      
    };
    this.props.handleChange((sum-oldSum));
  },

  decrement(product) {
    let oldSum=this.state.total;
    let sum;
    if (this.state.total > 0){
        let qty = (this.state.qty-1);
        if(qty >= product.special_qty){
          sum =   Number(Math.round(qty*(product.special_price/product.special_qty)+'e2')+'e-2');
          this.setState(prevState => ({ 
                                        total: sum,
                                        qty: qty
                                      }));    
        }
        else {
          sum = qty*product.unit_price;
          this.setState(prevState => ({ total: sum, qty: qty }));      
        };
     }
     if (sum) {
        this.props.handleChange(sum-oldSum);
      }
      else{
        this.props.handleChange(-oldSum);
      } 
 },

  render() {
      let styles = {
                      'transition': 'color .2s',
                      'hover': 'background-color: #f5f5f5',
                      'border-bottom': '1px solid #ddd'
                    };
    const tdStyle = {
       'width':150,  'textAlign': 'center'
    };
        styles.color = this.props.product.special_qty ? 'red' : 'black';

    return (
      <tr style={styles}>
        <td style={tdStyle}>{this.props.product.name}</td>
        <td style={tdStyle}>{this.props.product.unit_price}</td>
        <td style={tdStyle}>{this.props.product.special_qty}</td>
        <td style={tdStyle}>{this.props.product.special_price}</td>
        <td style={tdStyle}>
            <button containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                    style={{fontSize: 20, color: 'green'}}
                    type="button" 
                    onClick={this.increment.bind(this, this.props.product)}>
                    Add
            </button>
        </td>           
        <td style={tdStyle}>
            <button containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                    style={{fontSize: 20, color: 'green'}}
                    type="button" 
                    onClick={this.decrement.bind(this, this.props.product)}>
                    Remove
            </button>
        </td>
        <td style={tdStyle}>{(this.state.qty != 0  && this.state.qty ? this.state.qty : '')}</td>
        <td style={tdStyle}>{(this.state.total != 0 && this.state.total ? this.state.total : '')}</td>    
      </tr>
    );
  }
})