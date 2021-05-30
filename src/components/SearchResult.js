import React from 'react';
import '../styles/searchResult.css';
import { GiBackwardTime } from 'react-icons/gi';
import { FiArrowUpCircle } from 'react-icons/fi';
import { CgArrowsExchangeV } from 'react-icons/cg';
import NetflixImg from '../images/netflix.PNG';

function SearchResult({ status, title, uptime, responseTime }) {
	return (
		<div className={`searchResult ${status}`}>
			<div className='searchResult-left'>
				<h2 className='searchResult-title'>{title}</h2>
				<img src={NetflixImg} alt='website-img' className='searchResult-img' />
			</div>
			<div className='searchResult-right'>
				<div className='searchResult-item'>
					<CgArrowsExchangeV className='searchResult-item--icon' />
					<h3 className='searchResult-item--title'>Website Status :&nbsp;</h3>
					<p className='searchResult-item--value'>{status}</p>
				</div>
				<div className='searchResult-item'>
					<FiArrowUpCircle className='searchResult-item--icon' />
					<h3 className='searchResult-item--title'>Overall Upptime :&nbsp;</h3>
					<p className='searchResult-item--value'> {uptime}%</p>
				</div>
				<div className='searchResult-item'>
					<GiBackwardTime className='searchResult-item--icon' />
					<h3 className='searchResult-item--title'>
						Average Response Time :&nbsp;
					</h3>
					<p className='searchResult-item--value'> {responseTime}ms</p>
				</div>
				<button className='searchResult-btn'>Add To List</button>
			</div>
		</div>
	);
}

export default SearchResult;
