import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';

const DetailCard = () => {
    const { detailMovieData } = useSelector(state => state.movie);

    const [modalShow, setModalShow] = useState(false);
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

                    <Row className='trailer'><p onClick={() => setModalShow(true)}>Watch Trailer</p></Row>

                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Col>
            </Row>

        </>
    )
}

function MyVerticallyCenteredModal(props) {
    const {trailerData} = useSelector(state => state.movie);
    let trailer = trailerData.find(item => item.name.includes('Trailer'))
    let key = '';
    console.log(trailer)
    if (trailer) {
        key = trailer.key
        console.log(key)
    } else {
        key = ''
    }
    return (
        <Modal
            style={{ color: 'black' }}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <YouTube
                    videoId={key}
                    opts={{
                        width: "100%",
                        playerVars: {
                            autoplay: 1, //자동재생 O
                            rel: 0, 
                            modestbranding: 1, 
                        },
                    }}
                    //이벤트 리스너 
                    onEnd={(e) => { e.target.stopVideo(0); }}
                /></Modal.Body>
        </Modal>
    );
}


export default DetailCard