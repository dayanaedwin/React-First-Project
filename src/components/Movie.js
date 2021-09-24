import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
	return (
		<li className={classes.movie}>
			<h2>
				{props.title} ({props.releaseDate})
			</h2>
			<p>{props.openingText}</p>
		</li>
	);
};

export default Movie;
