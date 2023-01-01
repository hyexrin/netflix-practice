import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import DetailCard from '../components/DetailCard';
import ReviewCard from '../components/ReviewCard';
import { movieAction } from '../redux/actions/movieAction';

const MovieDetail = () => {
  let { id } = useParams();
  // console.log("id?", id);

  const [boxState, setBoxState] = useState(false);

  const dispatch = useDispatch();
  const { detailMovieData, reviewDatas, loading } = useSelector(state => state.movie);

  const getMovieDetail = () => {
    dispatch(movieAction.getMovieDetail(id));
  }

  useEffect(() => {
    getMovieDetail();
  }, []);

  // console.log(detailMovieData.title);
  // console.log("reviewDatas", reviewDatas);

  if (loading) {
    return <ClipLoader
      color="#ffffff"
      loading={loading}
      size={150}
    />
  }
  return (
    <Container className='movie-detail-container'>
      {/* {detailMovieData ?: 'hello'} */}
      {/* {reviewDatas ?: 'bye'} */}
      <Row>
        <DetailCard />
      </Row>
      <Row className='box'>
        <Col className='btn-box'>
          <Button
            className='detail-show-btn'
            onClick={() => { setBoxState(!boxState) }}
            variant="outline-danger"
          >Reviews</Button>
          <Button variant="outline-danger">
            abc
          </Button>
        </Col>
      </Row>
      <Row>
        <Row>
          <ReviewCard
            boxState={boxState} />
        </Row>
      </Row>
    </Container>
  )
}


export default MovieDetail