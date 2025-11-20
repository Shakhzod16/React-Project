// import logo from '../assets/img/Frame 993.png';
// import Gf from '../assets/img/Frame 2.png'
// import car from '../assets/img/car 2 1.png'
// import '../style/Navbar/Navbar.scss';
// import location from '../assets/img/location.png'
// import kalendar from '../assets/img/calendar.png'
// // import back from '../assets/img/Frame.png'

// function Navbar() {
// 	return (
// 		<section className='section-nav'>
// 			<div className='nav'>
// 				<span>
// 					<img src={logo} alt='' />
// 				</span>
// 				<div className='logo-text'>
// 					<a href=''>Become a renter</a>
// 					<a href=''>Rental deals</a>
// 					<a href=''>How it work</a>
// 					<a href=''>Why choose us</a>
// 				</div>
// 				<div className='sign'>
// 					<button className='signIn'>Sign in</button>
// 					<button className='signUp'>Sign up</button>
// 				</div>
// 			</div>
// 			<div className='decktop'>
// 				<div className='text'>
// 					<h1>
// 						Find, book and <br /> rent a car <span>Easily</span>
// 					</h1>
// 					<p>
// 						Get a car wherever and whenever you <br /> need it with your IOS and Android device.
// 					</p>

// 					<img src={Gf} alt='' className='SS' />
// 				</div>
// 				<img src={car} alt='' className='car' />
// 			</div>

// 			<div className='seacher'>
// 				<div className='card-locat'>
// 					<img src={location} alt='' />
// 					<span>
// 						<p className='text-p'>Location</p>
// 						<p>Search your location</p>
// 					</span>
// 				</div>

// 				<div className='card-calen'>
// 					<img src={kalendar} alt='' />
// 					<span>
// 						<p className='text-p'>Pickup date</p>
// 						<p>Tue 15 Feb, 09:00</p>
// 					</span>
// 				</div>

// 				<div className='card-calen'>
// 					<img src={kalendar} alt='' />
// 					<span>
// 						<p className='text-p'>Return date</p>
// 						<p>Thu 16 Feb, 11:00</p>
// 					</span>
// 				</div>

// 				<button className='ButCard'>Search</button>
// 			</div>
// 		</section>
// 	);
// }

// export default Navbar;

import logo from '../assets/img/Frame 993.png';
import Gf from '../assets/img/Frame 2.png';
import car from '../assets/img/car 2 1.png';
import location from '../assets/img/location.png';
import kalendar from '../assets/img/calendar.png';

import '../style/Navbar/Navbar.scss';

function Navbar() {
	return (
		<section className='navbar-section'>
			<div className='container nav'>
				<img src={logo} alt='logo' />

				<div className='menu'>
					<a href=''>Become a renter</a>
					<a href=''>Rental deals</a>
					<a href=''>How it work</a>
					<a href=''>Why choose us</a>
				</div>

				<div className='sign'>
					<button className='signIn'>Sign in</button>
					<button className='signUp'>Sign up</button>
				</div>
			</div>

			<div className='container decktop'>
				<div className='text'>
					<h1>
						Find, book and <br /> rent a car <span>Easily</span>
					</h1>
					<p>
						Get a car wherever and whenever you <br />
						need it with your IOS and Android device.
					</p>

					<img src={Gf} alt='' className='SS' />
				</div>

				<img src={car} alt='' className='car' />
			</div>

			<div className='container seacher'>
				<div className='card'>
					<img src={location} alt='' />
					<span>
						<p className='label'>Location</p>
						<p className='value'>Search your location</p>
					</span>
				</div>

				<div className='card'>
					<img src={kalendar} alt='' />
					<span>
						<p className='label'>Pickup date</p>
						<p className='value'>Tue 15 Feb, 09:00</p>
					</span>
				</div>

				<div className='card no-border'>
					<img src={kalendar} alt='' />
					<span>
						<p className='label'>Return date</p>
						<p className='value'>Thu 16 Feb, 11:00</p>
					</span>
				</div>

				<button className='ButCard'>Search</button>
			</div>
		</section>
	);
}

export default Navbar;
