import React, { Component, Fragment } from 'react';
import Loadable from 'react-loadable';
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
				 <Navigation />

				 {/* <Switch>
					<Route path='/graph' name="graph" component = {Graph} />
					<Route path='/table' name="table" component = {Table} />
				</Switch>  */}

				
			</Fragment>
		)
	}
}

