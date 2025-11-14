import { useState } from 'react';
import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Main from './layouts/Main';

function Counter() {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return <button onClick={handleClick}>You pressed me {count} times</button>;
}

function App() {
	return (
		<div>
			<Header />
			<Main />
			<Counter />
			<Footer />
		</div>
	);
}

export default App;
