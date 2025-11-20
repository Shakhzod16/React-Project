import Info from './layout/Content-info.jsx';
import Content from './layout/Contents.jsx';
import Footer from './layout/Footer.jsx';
import Links from './layout/Links.jsx';
import Magazin from './layout/Magazin.jsx';
import Navbar from './layout/navbar.jsx';
import Testimonials from './layout/Testimonials.jsx';

function App() {
	return (
		<>
			<Navbar />
			<Content />
			<Info />
			<Magazin />
			<Testimonials />
			<Links />
			<Footer />
		</>
	);
}

export default App;
