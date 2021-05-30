import React from 'react';
import { ImArrowDown, ImArrowUp } from 'react-icons/im';
import '../styles/websites.css';

function Website({ status, logo, graphImg, title }) {
	return (
		<div className={`website ${status}`}>
			{status === 'up' ? (
				<ImArrowUp className='website-status website-status__up' />
			) : (
				<ImArrowDown className='website-status website-status__down' />
			)}
			<img src={logo} alt='' className='website-logo' />
			<h3 className='website-title'>{title}</h3>
			<img className='website-graph' src={graphImg} />
			<div className='website-data'>
				<div className='website-item'>
					<h4 className='website-item--title'>Overall Upptime</h4>
					<p className='website-item--value'>80%</p>
				</div>
				<div className='website-item'>
					<h4 className='website-item--title'>Average Response Time</h4>
					<p className='website-item--value'>300ms</p>
				</div>
			</div>
		</div>
	);
}

export default Website;
