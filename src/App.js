import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
// import Home from './components/Home'
import Mood from './components/mood/Mood'
import Weather from './components/weather/Weather'
import Sidebar from './components/Sidebar'
import './App.scss';

const App = () => {

	return (
		< Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Login} />
					{/* <Route exact path='/' component={Home} /> */}
					{/* <Route exact path='/home' component={Home} /> */}
					<Route path="/mood" render={() =>
						<React.Fragment>
							<Sidebar />
							< Mood />
						</React.Fragment>
					} />
					<Route path="/weather" render={() =>
						<React.Fragment>
							<Sidebar />
							< Weather />
						</React.Fragment>
					} />
					<Route path="*" component={() => "404 NOT FOUND"} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
