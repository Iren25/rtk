// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

export default function Layout(): JSX.Element {
	return (
		<>
			<NavBar />
			<Outlet />
			<footer>Footer</footer>
		</>
	);
}
