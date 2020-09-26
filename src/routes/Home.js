import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import About from './About'
import './Home.css';

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async() => { // 'async' == 'asynchronized': It tells JavaScript to wait for 'await'.
        const {
            data: {
                data: {movies}
            }
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

        this.setState({ movies, isLoading: false });
    };

    componentDidMount() {
        this.getMovies();
    }
    
    render() {
        const { isLoading, movies } = this.state;
        
        return (
            <section className="container">
                {isLoading
                    ? <div className="loader">
                        <p className="loader__text">Loading...</p>
                    </div>
                    : <div className="movies">
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                genres={movie.genres}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                trailer={movie.yt_trailer_code}
                                bgImg={movie.background_image_original}
                            />
                        ))}
                    </div>
                }
            </section>
        );
    }
}

export default Home;