import React from 'react'
import { Col, Container, Row, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const RecommendCard = ({ boxState }) => {
    const { recommendDatas, genreList } = useSelector(state => state.movie);

    const navigate = useNavigate('');
    // console.log(recommendDatas);
    return (
        <Container className={`recommend-${boxState}`}>
            <Row className='test'>
                {recommendDatas.map(item => (
                    <div
                        key={item.id}
                        className='recommend-card'
                        style={{
                            backgroundImage: "url(" +
                                `https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${item.poster_path}` +
                                ")",
                        }}
                        onClick={() => {
                            console.log('click title', item.title)
                            navigate(`/movies/${item.id}`);
                        }}
                    >
                        <Container className='overlay'>
                            <Row><h1>{item.title}</h1></Row>
                        </Container>
                    </div>
                ))}
            </Row>

        </Container>
    )
}

export default RecommendCard