import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ item }) => {
    const navigate = useNavigate('');

    const { genreList } = useSelector(state => state.movie);
    return (
        <div
            className='movie-card'
            style={{
                backgroundImage: "url(" +
                    `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` + ")",
            }}
            onClick={() => navigate(`/movies/${item.id}`)}
        >
            <div className='movie-card-overlay'>
                <h1>{item.title}</h1>
                {item.genre_ids.map(id => (
                    <Badge bg="danger" key={id}>
                        {genreList.find(item => item.id === id).name}
                    </Badge>
                ))}

                <div>
                    <span>{item.vote_average}</span>
                    <span>{item.adult ? '청불' : "Under 18"}</span>
                </div>
            </div>

        </div>
    )
}

export default MovieCard