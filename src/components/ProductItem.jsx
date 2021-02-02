import { observer } from 'mobx-react-lite';
import React from 'react';

const ProductItem = observer(({data, getById, info}) => {

  const onLoad = () => getById(data.id);

  return (
    <div className="item product">
      {console.log('rerender', data.id)}
      <p className="name">{data.name}</p>
      {info &&
        <div className="info">
          {JSON.stringify(info)}
        </div>
      }
      <button onClick={onLoad}>Load info</button>
    </div>
  );
});

// export default memo(ProductItem);
export default ProductItem;