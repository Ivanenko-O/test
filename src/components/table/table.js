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
			<div>
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
							accessor:  d => d[`4. low'`]
						}, {
							Header: 'close',
							accessor: '3. close'
						}, {
							Header: 'adjusted close',
							accessor: '4. adjusted close'
						}, {
							Header: 'volume',
							accessor: '5. volume'
						}, {
							Header: 'adjusted close',
							accessor: '6. adjusted close'
						}, {
							Header: 'dividend amount',
							accessor: '7. dividend amount'
						}, {
							Header: 'split coefficient',
							accessor: '8. split coefficient'
						}]
					}
				/>
			</div>
		)

	}
}

