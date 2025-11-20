// import '../style/Content/Mag/OnliMag.scss'

// function Mag() {
//   return (
// 		<section className='magazin'>
// 			<div className='text'>
// 				<span>POPULAR RENTAL DEALS</span>
// 				<h1>Most popular cars rental deals</h1>
//       </div>
//       <div className="box">
//         <div className="card">

//         </div>
//         <div className="card">

//         </div>
//         <div className="card">

//         </div>
//         <div className="card">

//         </div>
//       </div>
// 		</section>
// 	);
// }

// export default Mag

import React from 'react';
import '../style/Content/Mag/OnliMag.scss';
// import './Images.jsx'
import jaguar from '../assets/img/image 12.png';
import audi from '../assets/img/Audi 1.png';
import bmw from '../assets/img/image 13.png';
import lamboborgini from '../assets/img/image 11.png';

const cars = [
	{
		name: 'Jaguar XE L P250',
		rating: 4.8,
		reviews: '2,436',
		passengers: 4,
		transmission: 'Auto',
		ac: true,
		doors: 4,
		price: '1,800',
		image: jaguar,
	},
	{
		name: 'Audi R8',
		rating: 4.6,
		reviews: '1,936',
		passengers: 2,
		transmission: 'Auto',
		ac: true,
		doors: 2,
		price: '2,100',
		image: audi,
	},
	{
		name: 'BMW M3',
		rating: 4.5,
		reviews: '2,036',
		passengers: 4,
		transmission: 'Auto',
		ac: true,
		doors: 4,
		price: '1,600',
		image: bmw,
	},
	{
		name: 'Lamborghini Huracan',
		rating: 4.3,
		reviews: '2,236',
		passengers: 2,
		transmission: 'Auto',
		ac: true,
		doors: 2,
		price: '2,300',
		image: lamboborgini,
	},
];

export default function PopularCars() {
	return (
		<section className='popular-cars'>
			<div className='section-tag'>POPULAR RENTAL DEALS</div>
			<h2 className='title'>Most popular cars rental deals</h2>

			<div className='cars-grid'>
				{cars.map((car, index) => (
					<div className='car-card' key={index}>
						<img src={car.image} alt={car.name} className='car-image' />

						<h3>{car.name}</h3>

						<div className='rating'>
							⭐ {car.rating} <span>({car.reviews} reviews)</span>
						</div>

						<div className='features'>
							<div>👤 {car.passengers} Passengers</div>
							<div>⚙️ {car.transmission}</div>
							<div>❄️ Air Conditioning</div>
							<div>🚪 {car.doors} Doors</div>
						</div>

						<div className='price'>
							<span>${car.price}</span> /day
						</div>

						<button className='rent-btn'>Rent Now →</button>
					</div>
				))}
			</div>

			<button className='show-all'>Show all vehicles →</button>
		</section>
	);
}
