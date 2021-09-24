import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const [movies, setMovies] = useState([]);

	async function fetchMovieHandler() {
		const response = await fetch('https://swapi.dev/api/films/');
		const data = await response.json();

		const transformedMovies = data.results.map((movieData) => {
			return {
				id: movieData.episode_id,
				title: movieData.title,
				openingText: movieData.opening_crawl,
				releaseDate: movieData.release_date,
			};
		});
		setMovies(transformedMovies);
	}

	return (
		<div>
			<section>
				<button onClick={fetchMovieHandler}>Show Movies</button>
			</section>
			<section>
				<div>
					<MoviesList movies={movies} />
				</div>
			</section>
		</div>
	);
}

export default App;
