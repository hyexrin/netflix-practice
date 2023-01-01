import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux';

const DetailCard = () => {
    const {detailMovieData} = useSelector(state => state.movie);

    return (
        <>
            <Row>
                <Col className='detail-cotent-box'>
                    <img
                        className='movie-detail-poster'
                        alt="poster_img"
                        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${detailMovieData.poster_path}`} />
                </Col>

                <Col className='detail-cotent-box'>
                    <Row className='detail-box--wrap'>
                        <Row>
                            {detailMovieData.genres && detailMovieData.genres.map(item => (
                                <Badge key={item.id} className='badge' bg="danger">{item.name}</Badge>
                            ))}
                        </Row>
                        <Row className='detail-row-box'><h1 className='detail-title'>{detailMovieData.title}</h1></Row>
                        <Row className='detail-row-box'>{detailMovieData.tagline}</Row>

                        <Row className='detail-row-box'>
                            <Col>{detailMovieData.vote_average}</Col>
                            <Col>{detailMovieData.adult === false ? 'Under 18' : '19+'}</Col>
                        </Row>
                    </Row>

                    <Row className='detail-box--wrap'>
                        <Row className='detail-row-box'>{detailMovieData.overview}</Row>
                    </Row>

                    <Row className='detail-box--wrap'>
                        <Row>
                            <Badge className='detail-badge' bg="danger">Budget</Badge>${detailMovieData.budget}
                        </Row>
                        <Row>
                            <Badge className='detail-badge' bg="danger">Revenue</Badge>${detailMovieData.revenue}
                        </Row>
                        <Row>
                            <Badge className='detail-badge' bg="danger">Release Day</Badge>{detailMovieData.release_date}
                        </Row>
                        <Row>
                            <Badge className='detail-badge' bg="danger">Time</Badge>{detailMovieData.runtime}
                        </Row>
                    </Row>

                    <Row className='trailer'><p>Watch Trailer</p></Row>
                </Col>
            </Row>

        </>
    )
}

export default DetailCard