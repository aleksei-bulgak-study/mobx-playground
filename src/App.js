import React from 'react';
import Products from './components/Products';
import { Provider } from 'mobx-react';

import ProductStore from './stores/Product.store';

const stores = {
    productStore: new ProductStore(),
};

function App() {
    return (
        <Provider {...stores}>
            <Products />
        </Provider>
    );
}

export default App;
