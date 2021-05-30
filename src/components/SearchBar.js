import React, { useState } from 'react';
import '../styles/searchBar.css';
import { ImSearch } from 'react-icons/im';

function SearchBar() {
	const [searchTerm, setSearchTetm] = useState('');

	const handleInput = (e) => {
		setSearchTetm(e.target.value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		setSearchTetm('');
	};

	return (
		<div className='search'>
			<form onSubmit={handleSearch} className='search-form'>
				<ImSearch className='search-icon' />
				<input
					type='search'
					placeholder='Enter your website url here...'
					className='search-input'
					value={searchTerm}
					onChange={handleInput}
				/>
				<button className='search-btn' type='submit'>
					Search
				</button>
			</form>
		</div>
	);
}

export default SearchBar;
