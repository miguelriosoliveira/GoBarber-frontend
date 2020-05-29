import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={SignIn} />
			<Route path="/signup" component={SignUp} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
