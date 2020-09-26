import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    render() {
        const { location, history } = this.props;
        const state = location.state;
        
        if (state !== undefined) {
            return (
                <div>
                    <img className="bgImg" src={state.bgImg} alt={state.title} title={state.title} />
                    <div className="informationWrap">
                        <h3 className="title">{state.title}</h3>
                        <h5 className="year">{state.year} |</h5>
                        <ul className="genres">
                            {state.genres.map((genre, index) => (
                                <li className="genre" key={index}>{genre}</li>
                            ))}
                        </ul>
                        <p className="summary">{state.summary}</p>
                        {state.trailer
                            ? <a
                                className="link"
                                href={`https://www.youtube.com/watch?v=${state.trailer}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                 
                            </a>
                            : null
                        }
                    </div>
                </div>
            );
        } else {
            history.push('/'); // It redirects to '/'
            return 0;
        }
    }
}

export default Detail;