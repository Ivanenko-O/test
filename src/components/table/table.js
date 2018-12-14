import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { getData } from '../../helpers/fetch';


export default class Table extends PureComponent {

	static contextTypes = {
		api: PropTypes.string.isRequired,
	};

	state = {
		posts: [],
	}

	async componentDidMount() {
		const arr = await getData(this.context.api)
		this.setState({
			posts: arr
		})
	}

	render() {

		console.log(this.state.posts)
		// if (this.state.posts) {
		return (
				<ReactTable
					// data={ columns }
					data={this.state.posts}
					columns={
						[{
							Header: 'Date',
							accessor: 'date'
						}, {
							Header: 'Open',
							id: "Open",
                  			accessor: d => d[`1. open`]
						}, {
							Header: 'high',
							id: 'high',
							accessor:  d => d[`2. high`]
						}, {
							Header: 'low',
							id: "low",
							accessor:  d => d[`3. low'`]
						}, {
							Header: 'close',
							id: 'close',
							accessor: d => d[`4. close`]
						}, {
							Header: 'adjusted close',
							id: 'adjusted close',
							accessor: d => d[`5. adjusted close`]
						}, {
							Header: 'volume',
							id: 'volume',
							accessor: d => d[`6. volume`]
						}, {
							Header: 'dividend amount',
							id: 'dividend amount',
							accessor: d => d[`7. dividend amount`]
						}, {
							Header: 'split coefficient',
							id: 'split coefficient',
							accessor: d => d[`8. split coefficient`]
						}]
					}
				/>
		)

	}
}

