import React, { Component, Fragment } from 'react';
import Loadable from 'react-loadable';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../partials/header';
import Navigation from '../partials/navigation';




const Loading = () => <div>Loading...</div>

const Graph = Loadable({
	loader: () => import('../components/graph/graph'),
	loading: Loading,
})

const Table = Loadable({
	loader: () => import('../components/table/table'),
	loading: Loading
})

export default class DefaultLayout extends Component {

	render() {
		return (
			<Fragment>
				<Header />
				<Navigation />

				<div>
					<Switch>
						<Route path='/graph' name="graph" component={Graph} />
						<Route path='/table' name="table" component={Table} />
						<Redirect to='/table' />
					</Switch>
				</div>
			</Fragment>
		)
	}
}

