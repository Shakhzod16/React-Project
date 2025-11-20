import React from 'react';
import '../style/Content/Testimonials/Testimonials.scss';

import person1 from '../assets/img/Rectangle 8.png';
import person2 from '../assets/img/Rectangle 8 (1).png';
import person3 from '../assets/img/eeba36a2a2d37754bab8b462f4262d97.jpg';

const testimonials = [
	{
		name: 'Charlie Johnson',
		location: 'From New York, US',
		rating: 5.0,
		review:
			'I feel very secure when using caretall’s services. Your customer care team is very enthusiastic and the driver is always on time.',
		image: person1,
	},
	{
		name: 'Emily Carter',
		location: 'From Los Angeles, US',
		rating: 4.9,
		review:
			'A great service with fast response. The car was clean, the ride was smooth and the driver was extremely polite.',
		image: person2,
	},
	{
		name: 'William Brown',
		location: 'From Chicago, US',
		rating: 5.0,
		review:
			'I’ve been using your services for a long time. Your service is great, I will continue to use your service.',
		image: person3,
	},
];

function Testimonials() {
	return (
		<section className='testimonials'>
			<div className='tag'>TESTIMONIALS</div>
			<h2 className='title'>What people say about us?</h2>

			<div className='testimonials-grid'>
				{testimonials.map((item, index) => (
					<div className='testimonial-card' key={index}>
						<img src={item.image} alt={item.name} className='avatar' />

						<div className='rating'>
							{item.rating} <span>stars</span>
							<div className='stars'>⭐⭐⭐⭐⭐</div>
						</div>

						<p className='review'>"{item.review}"</p>

						<div className='author'>
							<h4>{item.name}</h4>
							<span>{item.location}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Testimonials;

// import React from 'react';
// import './Testimonials.scss';

// import person1 from '../assets/img/Rectangle 8.png';
// import person2 from '../assets/img/Rectangle 8 (1).png';
// // import person3 from '../assets/img/person3.jpg';

// const testimonials = [
// 	{
// 		name: 'Charlie Johnson',
// 		location: 'From New York, US',
// 		rating: 5.0,
// 		review:
// 			'I feel very secure when using caretall’s services. Your customer care team is very enthusiastic and the driver is always on time.',
// 		image: person1,
// 	},
// 	{
// 		name: 'Emily Carter',
// 		location: 'From Los Angeles, US',
// 		rating: 4.9,
// 		review:
// 			'A great service with fast response. The car was clean, the ride was smooth and the driver was extremely polite.',
// 		image: person2,
// 	},
// 	{
// 		name: 'William Brown',
// 		location: 'From Chicago, US',
// 		rating: 5.0,
// 		review:
// 			'I’ve been using your services for a long time. Your service is great, I will continue to use your service.',
// 		// image: person3,
// 	},
// ];

// export default function Testimonials() {
// 	return (
// 		<section className='testimonials'>
// 			<div className='bg-quotes'>“”</div>

// 			<div className='tag'>TESTIMONIALS</div>
// 			<h2 className='title'>What people say about us?</h2>

// 			<div className='testimonials-grid'>
// 				{testimonials.map((item, index) => (
// 					<div className='testimonial-card' key={index}>
// 						<img src={item.image} alt={item.name} className='avatar' />

// 						<div className='rating-row'>
// 							<strong>{item.rating}</strong>
// 							<span>stars</span>
// 						</div>

// 						<div className='stars'>⭐⭐⭐⭐⭐</div>

// 						<p className='review'>"{item.review}"</p>

// 						<div className='author'>
// 							<h4>{item.name}</h4>
// 							<span>{item.location}</span>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</section>
// 	);
// }
