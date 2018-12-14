import React, { PureComponent } from 'react';
import Logo from '../assets/img/logo.png';
export default class DefaultLayout extends PureComponent {

	render() {

		return (
			<header className="header-app container">
				<a href="#" className="header-logo">
					<img src={Logo} alt="logo" />
				</a>

				<div className="header-search">
					<input type="text" name="" id="" />
				</div>
			</header>
		)
	}
}

