import '../style/Content/Link/Links.scss';

import React from 'react';

import phoneImg from '../assets/img/iPhone 14 Pro Space Black Mockup.png';
import googlePlay from '../assets/img/image 2.png';
import appStore from '../assets/img/image 3.png';

const DownloadSection = () => {
	return (
		<section className='download'>
			<div className='download__container'>
				<div className='download__left'>
					<span className='download__tag'>DOWNLOAD</span>

					<h2 className='download__title'>
						Download Rentcars
						<br />
						App for <span>FREE</span>
					</h2>

					<p className='download__subtitle'>For faster, easier booking and exclusive deals.</p>

					<div className='download__buttons'>
						<a href='#'>
							<img src={googlePlay} alt='Google Play' />
						</a>
						<a href='#'>
							<img src={appStore} alt='App Store' />
						</a>
					</div>
				</div>

				<div className='download__right'>
					<img className='phone' src={phoneImg} alt='App Preview' />
				</div>
			</div>
		</section>
	);
};

export default DownloadSection;
