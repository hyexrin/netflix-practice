import React from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
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
            <Container className='movie-card-overlay'>
                <Row><h1>{item.title}</h1></Row>
                <Row className='movie-card-badges'>
                    {item.genre_ids.map(id => (
                        <Badge bg="danger" key={id}>
                            {genreList.find(item => item.id === id).name}
                        </Badge>
                    ))}
                </Row>
                <Row>
                    <Col><span>{item.vote_average}</span></Col>
                    <Col><span>{item.adult ? '청불' : "Under 18"}</span></Col>
                </Row>
            </Container>

        </div>
    )
}

export default MovieCard