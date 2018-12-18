import React, { PureComponent, Fragment } from 'react'
import Loadable from 'react-loadable'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from '../partials/header'
import Navigation from '../partials/navigation'

const Loading = () => <div>Loading...</div>

const Graph = Loadable({
	loader: () => import('../components/graph/graph'),
	loading: Loading,
})

const Table = Loadable({
	loader: () => import('../components/table/table'),
	loading: Loading
})

export default class DefaultLayout extends PureComponent {
	state = {
		searchValue: null
	}

	search = (value) => {
		this.setState({
			searchValue: value
		})
	}

	render() {
		return (
			<Fragment>
				<Header search = {this.search }/>
				<Navigation />

				<div>
					<Switch>
						<Route path='/' exact component={Table} />
						<Route path='/graph' name="graph" render={() => <Graph searchValue={this.state.searchValue} />}  />
						<Route path='/table' name="table" component={Table} />
						<Redirect to='/table' />
					</Switch>
				</div>
			</Fragment>
		)
	}
}

