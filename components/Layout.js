import Navbar from './Navbar';
import Head from 'next/head';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Frontend Mentor | Coffeeroasters subscription site</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
			</Head>
			<div>
				<Navbar />
				{children}
				<Footer />
			</div>
		</>
	);
};

export default Layout;
