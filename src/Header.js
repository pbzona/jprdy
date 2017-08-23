import React from 'react';
import './styles/Header.css';

const Header = (props) => {
	return (
		<div className="header-main">
			<h1>{props.title}</h1>
		</div>
	);
};

export default Header;