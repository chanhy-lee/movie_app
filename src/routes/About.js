import React from 'react';
import axios from 'axios';
import './About.css';

class About extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async() => {
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
                    ? <p className="about__text">Top 20 Loved Movies</p>
                    : <div className="about__page">
                        <p className="page__text">Top 20 Loved Movies</p>
                        <div className="posters">
                            {movies.map(movie => (
                                <div key={movie.id} className="poster">
                                    <img
                                        src={movie.medium_cover_image}
                                        alt={movie.title}
                                        title={movie.title}
                                    />
                                    <p className="title">{movie.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </section>
        );
    }
}

export default About;