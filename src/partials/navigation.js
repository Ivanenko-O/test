import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => 
	<aside>
		<Link to='/table'>Table</Link>
		<Link to='/graph'>Graph</Link>
	</aside>

export default Navigation