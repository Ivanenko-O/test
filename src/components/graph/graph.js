import { string } from 'prop-types'
import React, { PureComponent } from 'react'
import { getData } from '../../helpers/fetch'
import { Bar } from 'react-chartjs-2'
export default class Graph extends PureComponent {

	static contextTypes = {
		api: string.isRequired,
	}

	static propTypes = {
		searchValue: string
	}

	static defaultProps = {
		searchValue: 'low'
	}

	state = {
		posts: {
			labels: [],
			datasets: [{
				data: [],
			}]
		},
		arr: [],
		// searchValue: this.props.searchValue
	}

	async componentDidMount() {
		const data = await getData(this.context.api)
		this.buidData(data)
	}

	async componentWillReceiveProps() {
		const data = await getData(this.context.api)
		this.buidData(data)
	}

	buidData = (arr) => {
		const labels = []
		const data = []

		for (let i = 0; i < arr.length; i++) {
			labels.push(arr[i].date)
			data.push(arr[i][this.props.searchValue || 'adjusted close'])
		}

		this.setState({
			posts: {
				labels: labels,
				datasets: [{
					label: 'filter by ' + (this.props.searchValue || 'adjusted close'),
					backgroundColor: '#FFC107',
					borderColor: '#FFECB3',
					data: data
				}]
			}
		})
	}

	render() {
		const { posts } = this.state
		console.log(posts);

		return (
			<div className="canvas-container">
				<p>To filter by another item, enter name in SI and press <b>Enter</b> key, name of items:
					<div>
						<span>high, </span>
						<span>open, </span>
						<span>close, </span>
						<span>adjusted close, </span>
						<span>volume, </span>
						<span>split coefficient, </span>
					</div>
				</p>
				<Bar
					data={posts}
					className='chart'
				/>
			</div>
		)
	}
}

