import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStores } from '../stores';
import ProductItem from './ProductItem.container';

export default observer(() => {
  const {productStore} = useStores();

  useEffect(() => {
    console.log('loading')
    productStore.getProducts();
  }, [productStore]);

  return (
    <div className="container dashboard">
      {console.log('render', productStore.products)}
      {productStore.products.map(product => (<ProductItem key={product.id} product={product}/>))}
      {productStore.isLoading === true && <p>Loading</p>}
    </div>
  );
});