import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/home/Home'
import './App.scss';

const App = () => {

	return (
		< Router>
			<div className="App">
				<Switch>
					{/* <Route exact path="/" component={Login} /> */}
					<Route exact path='/' component={Home} />
					{/* <Route path='/home' component={Home} /> */}
					<Route path="*" component={() => "404 NOT FOUND"} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
