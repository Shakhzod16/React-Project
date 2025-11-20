import '../style/Content/Content.scss';
import locat from '../assets/img/locatio.png';
import kalendar from '../assets/img/kalendar.png';
import cars from '../assets/img/cars.png';
import models from '../assets/img/Frame 29.png';

function Content() {
	return (
		<section className='section-content'>
			<div className='text'>
				<h3>HOW IT WORK</h3>
			</div>
			<h1>Rent with following 3 working steps</h1>

			<div className='box'>
				<div className='card'>
					<span className='kub'>
						<img src={locat} alt='' />
					</span>
					<h2>Choose location</h2>
					<p>
						Choose your and find <br /> your best car
					</p>
				</div>

				<div className='card'>
					<span className='kub'>
						<img src={kalendar} alt='' />
					</span>
					<h2>Pick-up date</h2>
					<p>
						Select your pick up date and <br /> time to book your car
					</p>
				</div>

				<div className='card'>
					<span className='kub'>
						<img src={cars} alt='' />
					</span>

					<h2>Book your car</h2>
					<p>
						Book your car and we will deliver it <br /> directly to you
					</p>
				</div>
			</div>
			<img src={models} alt='' className='CarModels' />
		</section>
	);
}

export default Content;
