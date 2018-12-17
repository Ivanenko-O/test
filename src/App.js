
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import DefaultLayout from './layout/defaultLayout'

const options = {
	api: `https://www.alphavantage.co/query?apikey=demo&function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT`,
};

class App extends Component {

	static childContextTypes = {
		api: PropTypes.string.isRequired,
	}

	getChildContext() {
		return options;
	}

	render() {
		return (
			<DefaultLayout />
		)
	}
}


export default App