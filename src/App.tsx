import { Counter } from './features/counter/Counter';
import './App.css';
import ProductsList from './features/products/ProductsList';
import ProductCreate from './features/products/ProductCreate';
// eslint-disable-next-line import/order, import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './components/Home/Home';
import ErrorPage from './ErrorPage/ErrorPage';

function App(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="counter" element={<Counter />} />
				<Route path="create-product" element={<ProductCreate />} />
				<Route path="product-list" element={<ProductsList />} />
				<Route path="*" element={<ErrorPage />} />
			</Route>
		</Routes>
	);
}

export default App;
