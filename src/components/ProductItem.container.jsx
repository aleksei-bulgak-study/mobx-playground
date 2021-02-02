import { observer } from 'mobx-react-lite';
import React, { useCallback, useMemo } from 'react';
import { useStores } from '../stores';
import ProductItem from './ProductItem';

const ProductItemContainer = observer(({product}) => {

  const {productStore} = useStores();
  const getById = useCallback((id) => productStore.getById(id), [productStore]);

  const information = useMemo(() => productStore.product?.id === product.id ? productStore.product : null, [productStore.product, product]);

  return (
    <ProductItem data={product} getById={getById} info={information}/>
  );
});

// export default memo(ProductItem);
export default ProductItemContainer;