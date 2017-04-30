import React from 'react'
import { connect } from 'react-redux'
import { Grid, Cell } from 'react-mdl';
import ProductList from './components/ProductList'

const main = React.createClass({
    
    render() {
        console.log('qqqqqqqqqqqqqqqqqq');
        let products = this.props.Data.get("Data");
        if (products.prices) {
            return ( 
                    <ProductList productList={products.prices} />
            )
        }
        else {
            return ( < Cell col = { 12 } >
                        < h1 > Welcome please load product! </h1>
                    </Cell>
            )
        }
    }
});
export const WelcomePage = connect((state) => state)(main);