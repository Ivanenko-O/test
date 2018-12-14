import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import '../assets/style/app.css';


const Loading = () => <div>Loading...</div>

const Graph = Loadable({
	loader: () => import('../components/graph/graph'),
	loading: Loading,
})

const Table = Loadable({
	loader: () => import('../components/table/table'),
	loading: Loading
})

const DefaultLayout = Loadable({
	loader: () => import('../partials/defaultLayout'),
	loading: Loading
})

const options = {
	api: `https://www.alphavantage.co/query?apikey=demo&function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT`,
};


class Routes extends Component {

	static childContextTypes = {
		api: PropTypes.string.isRequired,
	}

	getChildContext() {
		return options;
	}

	render() {
		return (
			<Switch>
				<Route path='/graph' name="graph" component={Graph} />
				<Route path='/table' name="table" component={Table} />
				<Redirect to = '/table' />
			</Switch>
		)
	}
}


export default withRouter(Routes);