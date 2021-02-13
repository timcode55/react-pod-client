import React, { useState } from 'react';

import { array1, array2 } from '../../utils/category-list';
import './Header.css';

const Header = (props) => {
	console.log(props, 'props in Header');
	const [ value, setValue ] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
		console.log(e.target.value);
		// setPodcasts({ name: 'changing setpodcasts in Header after selection box changed', price: '$4751', id: 5894 });
		// setPodcasts((podcasts) => ({
		// 	...podcasts,
		// 	name: 'changing setpodcasts in Header after selection box changed',
		// 	price: '$4751',
		// 	id: 5894,
		// 	value: { value }
		// }));
	};

	return (
		<div className="test">
			<div className="header-main">
				<form className="select">
					<label>
						<span className="dropdown-title">Choose a Genre</span>
						<select onChange={handleChange}>
							{array1.map((item) => {
								return (
									<option key={item.id} value={item.id}>
										{item.name}
									</option>
								);
							})}
						</select>
					</label>
				</form>

				<form className="select">
					<label>
						<span className="dropdown-title">Choose a Genre</span>
						<select onChange={handleChange}>
							{array2.map((item) => {
								return (
									<option className="option" key={item.id} value={item.id}>
										{item.name}
									</option>
								);
							})}
						</select>
					</label>
				</form>
			</div>
			{/* <CardList podcasts={props} category={parseInt(value)} getApiData={props.getApiData} /> */}
		</div>
	);
};

export default Header;
