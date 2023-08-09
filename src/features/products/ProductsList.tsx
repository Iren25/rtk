import { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import FavoriteIcon from '@mui/icons-material/Favorite';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	selectFavoriteProduct,
	selectProducts,
	selectToggle,
} from './selectors';
import {
	changeToggleStatus,
	chooseFavoriteProduct,
	deleteProduct,
	loadProducts,
} from './productsSlice';
import Product from './types/Product';

export default function ProductsList(): JSX.Element {
	const products = useAppSelector(selectProducts);
	const toggle = useAppSelector(selectToggle);
	const favoriteProduct = useAppSelector(selectFavoriteProduct);
	const dispatch = useAppDispatch();
	useEffect(() => {
		void dispatch(loadProducts());
	}, [dispatch]);

	function handleDelete(id: number): void {
		void dispatch(deleteProduct(id));
	}
	return (
		<div>
			<h1>ProductsList</h1>
			<h2>Favorite product: </h2>
			{!favoriteProduct && <p>товар не выбран</p>}
			<p>
				{favoriteProduct?.title}
				{favoriteProduct?.price}
			</p>
			<div
				style={
					toggle ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
				}
			>
				STATUS
			</div>
			<button type="button" onClick={() => dispatch(changeToggleStatus())}>
				Сменить статус переключателя
			</button>
			<h2>Все товары: </h2>
			{products.map((product: Product) => (
				<li key={String(product.id)}>
					{product.title}
					<FavoriteIcon
						onClick={() => dispatch(chooseFavoriteProduct(product))}
					/>
					<button type="button" onClick={() => handleDelete(product.id)}>
						Удалить
					</button>
					<Link to="/">На главную</Link>
				</li>
			))}
		</div>
	);
}
