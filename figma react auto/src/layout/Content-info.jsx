import '../style/Content/Info/Info.scss';
import car2 from '../assets/img/Снимок экрана 2025-11-18 100839.png';
import money from '../assets/img/wallet.png';
import user from '../assets/img/user-tick.png';
import support from '../assets/img/24-support.png';
import massage from '../assets/img/messages-2.png';

function Info() {
	return (
		<section className='section-info'>
			<div className='img'>
				<img src={car2} alt='' className='audi' />
			</div>
			<div className='text-rec'>
				<div className='bp'>
					<h1>WHY CHOOSE US</h1>
				</div>
				<h2>
					We offer the best experience <br /> with our rental deals
				</h2>
				<div className='all-text'>
					<div className='cards'>
						<span>
							<img src={money} alt='' />
						</span>
						<div className='mini-text'>
							<h3>Best price guaranteed</h3>
							<p>Find a lower price? We’ll refund you 100% of the difference.</p>
						</div>
					</div>
					<div className='cards'>
						<span>
							<img src={user} alt='' />
						</span>
						<div className='mini-text'>
							<h3>Experienced driver</h3>
							<p>Don’t have a driver? Don’t worry, we have many experienced drivers for you.</p>
						</div>
					</div>
					<div className='cards'>
						<span>
							<img src={support} alt='' />
						</span>
						<div className='mini-text'>
							<h3>24 hour car delivery</h3>
							<p>Book your car anytime and we will deliver it directly to you.</p>
						</div>
					</div>
					<div className='cards'>
						<span>
							<img src={massage} alt='' />
						</span>
						<div className='mini-text'>
							<h3>24/7 technical support</h3>
							<p>Have a question? Contact Rentcars support any time when you have a problem.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Info;
