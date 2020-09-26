import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

function Movie({ id, year, genres, title, summary, poster, trailer, bgImg }) {
    return (
        <Link
            className="movieWrap"
            to={{
                pathname: `/movie/${id}`,
                state: {
                    year,
                    genres,
                    title,
                    summary,
                    poster,
                    trailer,
                    bgImg
                }
            }}
        >
            <div className="movie">
                <img className="poster" src={poster} alt={title} title={title} />
                <h3 className="title">{title}</h3>
                <h5 className="year">{year} |</h5>
                <ul className="genres">
                    {genres.map((genre, index) => (
                        <li className="genre" key={index}>{genre}</li>
                    ))}
                </ul>
                <p className="summary">{summary.length > 300 ? summary.slice(0, 300) + "..." : summary}</p>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    trailer: PropTypes.string
};

export default Movie;