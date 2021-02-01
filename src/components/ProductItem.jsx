
import {inject, observer} from 'mobx-react';
import React, { useCallback } from 'react';

const ProductItem = observer(({data, productStore}) => {

  const onLoad = useCallback(() => productStore.getById(data.id), [data, productStore]);

  return (
    <div className="item product">
      {console.log('rerender', data.id)}
      <p className="name">{data.name}</p>
      {productStore.product && productStore.product.id === data.id && (
        <div className="info">
          {JSON.stringify(productStore.product)}
        </div>
      )}
      <button onClick={onLoad}>Load info</button>
    </div>
  );
});

export default inject(stores => ({productStore: stores.productStore}))(ProductItem);