import React, { Component, Fragment } from 'react';
import Loadable from 'react-loadable';
import Header from './header';
import Navigation from './navigation';



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
			</Fragment>
		)
	}
}

