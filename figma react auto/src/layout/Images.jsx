// import jaguar from '../assets/img/image 12.png';
// import audi from '../assets/img/Audi 1.png';
// import bmw from '../assets/img/image 13.png';
// import lamboborgini from '../assets/img/image 11.png';

// const imgArr = [jaguar, audi, bmw, lamboborgini];

// export default imgArr;

// import jaguar from '../assets/img/image 12.png';
// import audi from '../assets/img/Audi 1.png';
// import bmw from '../assets/img/image 13.png';
// import lamboborgini from '../assets/img/image 11.png';

// const imgArr = [jaguar, audi, bmw, lamboborgini];

// function Arr() {
// 	return (
// 		<div>
// 			{imgArr.map((img, index) => (
// 				<img key={index} src={img} alt={`car-${index}`} />
// 			))}
// 		</div>
// 	);
// }

// export default Arr;

import jaguar from '../assets/img/image 12.png';
import audi from '../assets/img/Audi 1.png';
import bmw from '../assets/img/image 13.png';
import lamboborgini from '../assets/img/image 11.png';

export default function Arr() {
	const imgArr = [jaguar, audi, bmw, lamboborgini];

	return (
		<div className='flex gap-4'>
			{imgArr.map((img, index) => (
				<img key={index} src={img} alt={`car-${index}`} className='w-40 h-auto rounded-xl' />
			))}
		</div>
	);
}
