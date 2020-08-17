import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import './App.scss';
import { GlobalContext } from './GlobalContext';

const App = () => {
	const [filterValues, setFilterValues] = useState({
		valence: 0,
		danceability: 0,
		energy: 0
	})

	return (
		< Router>
			<div className="App">
				<Switch>
					<GlobalContext.Provider value={{ filterValues, setFilterValues }}>
						{/* <Route exact path="/" component={Login} /> */}
						<Route exact path='/' component={Home} />
						{/* <Route path='/home' component={Home} /> */}
						<Route path="*" component={() => "404 NOT FOUND"} />
					</GlobalContext.Provider>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
