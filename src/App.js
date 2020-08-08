import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import './App.css';

const App = () => {
	return (
		< Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path='/home' component={Home} />
					<Route path="*" component={() => "404 NOT FOUND"} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
