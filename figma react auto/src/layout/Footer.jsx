import React from 'react';
import '../style/Footer/Footer.scss';
import star from '../assets/img/Frame (2).png';
import facebok from '../assets/img/facebook.png';
import instagram from '../assets/img/instagram.png';
import youtube from '../assets/img/youtube.png';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__col footer__brand'>
					<div className='footer__logo'>
						<span className='logo-icon'>
							<img src={star} alt='' />
						</span>{' '}
						RENTCARS
					</div>

					<p className='footer__info'>
						25566 Hc 1, Glennallen,
						<br />
						Alaska, 99588, USA
					</p>

					<p className='footer__info'>+603 4784 273 12</p>
					<p className='footer__info'>rentcars@gmail.com</p>
				</div>

				<div className='footer__col'>
					<h4>Our Product</h4>
					<ul>
						<li>Career</li>
						<li>Car</li>
						<li>Packages</li>
						<li>Features</li>
						<li>Priceline</li>
					</ul>
				</div>

				<div className='footer__col'>
					<h4>Resources</h4>
					<ul>
						<li>Download</li>
						<li>Help Centre</li>
						<li>Guides</li>
						<li>Partner Network</li>
						<li>Cruises</li>
						<li>Developer</li>
					</ul>
				</div>

				<div className='footer__col'>
					<h4>About Rentcars</h4>
					<ul>
						<li>Why choose us</li>
						<li>Our Story</li>
						<li>Investor Relations</li>
						<li>Press Center</li>
						<li>Advertise</li>
					</ul>
				</div>

				<div className='footer__col'>
					<h4>Follow Us</h4>
					<div className='footer__socials'>
						<i className='fab fa-facebook'>
							<img src={facebok} alt='' />
						</i>
						<i className='fab fa-instagram'>
							<img src={instagram} alt='' />
						</i>
						<i className='fab fa-youtube'>
							<img src={youtube} alt='' />
						</i>
					</div>
				</div>
			</div>

			<div className='footer__bottom'>Copyright 2023 • Rentcars, All Rights Reserved</div>
		</footer>
	);
};

export default Footer;
