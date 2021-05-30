import React from 'react';
import Website from './Website';
import ReactLogo from '../images/react-logo.jpg';
import WordPressLogo from '../images/wp.PNG';
import JDLogo from '../images/jd.jpg';
import GraphOne from '../images/graph1.jpg';
import GraphThree from '../images/graph3.PNG';
import GraphFour from '../images/graph4.PNG';

function WebsitesList() {
	return (
		<div
			className='websites'
			// style={{
			// 	marginTop: '4rem',
			// 	display: 'flex',
			// 	flexWrap: 'wrap',
			// 	justifyContent: 'space-between',
			// }}
			style={{
				marginTop: '4rem',
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
				gap: '4rem 2rem',
			}}
		>
			<Website
				status='up'
				title='Job Dundho'
				logo={JDLogo}
				graphImg={GraphOne}
			/>
			<Website
				status='down'
				title='Github User Dashboard'
				logo={ReactLogo}
				graphImg={GraphOne}
			/>
			<Website
				status='down'
				title='Movieocity'
				logo={ReactLogo}
				graphImg={GraphOne}
			/>
			<Website
				status='up'
				title='xyz.com'
				logo={WordPressLogo}
				graphImg={GraphOne}
			/>
		</div>
	);
}

export default WebsitesList;
