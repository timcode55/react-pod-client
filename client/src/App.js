import './App.css';

import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';

function App() {
	return (
		<div className="App">
			<h1>PodCharts App</h1>
			<Header />
			<CardList />
		</div>
	);
}

export default App;
