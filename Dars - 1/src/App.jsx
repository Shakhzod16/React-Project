import { useState } from 'react';
import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Navbar from './components/navbar';

function Counter() {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return <button onClick={handleClick}>You pressed me {count} times</button>;
}
function App() {
	return (
		<>
			<Navbar />
			<div style={{ paddingTop: '100px', textAlign: 'center' }}>
				<h1>Welcome</h1>
			</div>
		</>
	);
}

export default App;
