import React from 'react'
import ProductTable from './ProductTable'

module.exports = React.createClass({
  render() {
    return (
        <ProductTable  products={this.props.productList}  />
    )
  }
})
