import { useState } from 'react';
import '../scss/styles/main.scss';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className='navbar'>
			<div className='nav-container'>
				<div className='logo'>MyLogo</div>

				<ul className={open ? 'nav-links active' : 'nav-links'}>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Services</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
				</ul>

				<div className='menu-btn' onClick={() => setOpen(!open)}>
					<div className={open ? 'bar open' : 'bar'}></div>
					<div className={open ? 'bar open' : 'bar'}></div>
					<div className={open ? 'bar open' : 'bar'}></div>
				</div>
			</div>
		</nav>
	);
}
