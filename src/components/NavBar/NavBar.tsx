// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar(): JSX.Element {
	return (
		<nav className={styles.container}>
			<NavLink to="counter" className={styles.link}>
				Counter
			</NavLink>
			<NavLink to="create-product" className={styles.link}>
				Create Product
			</NavLink>
			<NavLink to="product-list" className={styles.link}>
				Product List
			</NavLink>
			<NavLink to="/" className={styles.link}>
				Home
			</NavLink>
		</nav>
	);
}
