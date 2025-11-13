import React, { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	function increase() {
		setCount(count + 1);
	}

	function decrease() {
		setCount(count - 1);
	}

	return (
		<div style={{ textAlign: 'center', marginTop: '50px' }}>
			<h1>Hisoblagich: {count}</h1>
			<button onClick={increase}>➕ Qo‘shish</button>
			<button onClick={decrease}>➖ Ayirish</button>
		</div>
	);
}

export default App;
