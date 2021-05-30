import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import WebsitesList from './components/WebsitesList';

function App() {
	return (
		<div className='container'>
			<Header />
			<SearchBar />
			<SearchResult
				status='up'
				title='Netflix'
				uptime='100'
				responseTime='700'
			/>
			{/* <SearchResult
				status='down'
				title='Google'
				uptime='98.99'
				responseTime='450'
			/> */}
			<WebsitesList />
		</div>
	);
}

export default App;
