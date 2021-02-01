
import {inject, observer} from 'mobx-react';
import React, { useEffect } from 'react';
import ProductItem from './ProductItem';

const Products = observer(({productStore}) => {

  useEffect(() => {
    console.log('loading')
    productStore.getProducts();
  }, [productStore]);

  return (
    <div className="container dashboard">
      {productStore.products.map(product => (<ProductItem key={product.id} data={product}/>))}
      {productStore.isLoading === true && <p>Loading</p>}
    </div>
  );
});

export default inject(stores => ({productStore: stores.productStore}))(Products);