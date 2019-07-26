import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Hooks;
import { useLocalStorage } from './hooks/useLocalStorage';

// Context;
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('cart', []);

	const addItem = item => {
		if (cart.some(element => element.id === item.id)) {
			alert('Item is already in shopping cart.')
		} else {
			setCart([...cart, item]);
		};
	};

	const deleteItem = id => {
			let arr = cart.filter(element => element.id !== id)
			setCart(arr);
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, deleteItem }}>
					<Navigation cart={cart} />
					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>
					<Route
						path="/cart"
						component={ShoppingCart}
					/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
