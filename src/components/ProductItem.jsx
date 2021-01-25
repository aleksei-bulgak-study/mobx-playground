import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';
import { useStores } from '../stores';

const ProductItem = observer(({data}) => {

  const {productStore} = useStores();

  const onLoad = useCallback(() => productStore.getById(data.id), [data, productStore]);

  return (
    <div className="item product">
      <p className="name">{data.name}</p>
      {productStore.product && (
        <div className="info">
          {JSON.stringify(productStore.product)}
        </div>
      )}
      <button onClick={onLoad}>Load info</button>
    </div>
  );
});

export default ProductItem;