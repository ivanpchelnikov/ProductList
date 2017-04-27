import React from 'react';
import {connect} from 'react-redux'
import {Layout, Header, Navigation, Icon, Content, Grid, Cell, Button} from 'react-mdl';
import {Link} from 'react-router'
import {fetchData} from './state/api-data'

const main = React.createClass({
  loadProduct: function() {
    this.props.dispatch(fetchData())
  },
  render: function () {
    return (
     <Layout fixedHeader>
        <Header title="Product List">
           <div>
            {'\u0020\u0020'}
            <Button raised onClick={this.loadProduct}> Load Product</Button>
           </div>
          
        </Header>
        <Content className="mdl-color-text--grey-600">
            {this.props.children}
        </Content>
     </Layout>
    );
  }
});
export const AppLayout = connect((state) => state)(main);
