import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { getData } from '../../helpers/fetch'
export default class Table extends PureComponent {
	static contextTypes = {
		api: PropTypes.string.isRequired,
	}

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
		return (
			<div className="container mt-3">
				<ReactTable
					data={this.state.posts}
					columns={
						[{
							Header: 'Date',
							accessor: 'date'
						}, {
							Header: 'Open',
							id: "Open",
                  			accessor: 'open'
						}, {
							Header: 'high',
							id: 'high',
							accessor:  'high'
						}, {
							Header: 'low',
							id: "low",
							accessor:  'low'
						}, {
							Header: 'close',
							id: 'close',
							accessor: 'close'
						}, {
							Header: 'adjusted close',
							id: 'adjusted close',
							accessor: 'adjusted close'
						}, {
							Header: 'volume',
							id: 'volume',
							accessor: 'volume'
						}, {
							Header: 'dividend amount',
							id: 'dividend amount',
							accessor: 'dividend amount'
						}, {
							Header: 'split coefficient',
							id: 'split coefficient',
							accessor: 'split coefficient'
						}]
					}
				/>
				</div>
		)

	}
}

