import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import './App.scss';
import Home from './components/Home';

const App = () => {

	return (
		< Router>
			<div className="App">
				<Switch>
					<Route path="/login" component={Login} />
					<Route exact path="/" component={Home} />
					<Route path="*" component={() => "404 NOT FOUND"} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
