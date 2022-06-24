import '../scss/main.scss';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			{/* children of the layout component */}
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
