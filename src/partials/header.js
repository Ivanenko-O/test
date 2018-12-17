import React, { PureComponent } from 'react'
import Logo from '../assets/img/logo.png'
export default class DefaultLayout extends PureComponent {

	handlerSearch = (e) => {
		if (e.key === 'Enter') {
			this.props.search(e.target.value)
		}
	}

	render() {
		return (
			<header className="header-app container">
				<a href="#" className="header-logo">
					<img src={Logo} alt="logo" />
				</a>

				<div className="header-search">
					<input type="text" name="" id="" onKeyPress = { (e) => this.handlerSearch(e) }/>
				</div>
			</header>
		)
	}
}