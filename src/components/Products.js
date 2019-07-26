import React, { useContext } from 'react';

// Components
import Product from './Product';

import { ProductContext } from '../contexts/ProductContext';

const Products = () => {
	const products = useContext(ProductContext)
	return (
		<div className="products-container">
			{products.products.map(product => (
				<Product
					key={product.title}
					product={product}
					addItem={products.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
