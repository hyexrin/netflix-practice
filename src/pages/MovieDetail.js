import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import DetailCard from '../components/DetailCard';
import RecommendCard from '../components/RecommendCard';
import ReviewCard from '../components/ReviewCard';
import { movieAction } from '../redux/actions/movieAction';

const MovieDetail = () => {
  let { id } = useParams();

  const [ReviewBoxState, setReviewBoxState] = useState(false);
  const [RecommendBoxState, setRecommendBoxState] = useState(false);

  const dispatch = useDispatch();
  const { reviewDatas, recommendDatas, loading } = useSelector(state => state.movie);

  const getMovieDetail = () => {
    dispatch(movieAction.getMovieDetail(id));
  }

  useEffect(() => {
    getMovieDetail();
  }, [id]);

  if (loading) {
    return <ClipLoader
      color="#ffffff"
      loading={loading}
      size={150}
    />
  }
  return (
    <Container className='movie-detail-container'>
      <Row>
        <DetailCard />
      </Row>
      <Row className='box'>
        <Button
          className={`detail-show-btn-${ReviewBoxState}`}
          onClick={() => { 
            setReviewBoxState(!ReviewBoxState) 
            setRecommendBoxState(false)
          }}
          variant="outline-danger"
        >REVIEWS {"(" + reviewDatas.length + ")"}</Button>

        <Button
          className={`detail-show-btn-${RecommendBoxState}`}
          onClick={() => { 
            setRecommendBoxState(!RecommendBoxState)
            setReviewBoxState(false) 
          }}
          variant="outline-danger"
        >RELATED MOVIES {"(" + recommendDatas.length + ")"}</Button>
      </Row>

      <Row>
        <ReviewCard
          boxState={ReviewBoxState} />
      </Row>

      <Row>
        <RecommendCard 
        boxState={RecommendBoxState} />
      </Row>

    </Container>
  )
}


export default MovieDetail