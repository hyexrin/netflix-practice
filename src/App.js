import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';
import Navigation from './components/Navigation';

// 1. 3개 페이지 필요 [ Home 페이지 / movie 페이지 / movie Detail 페이지 ]

// 2. Home 페이지에서 배너를 볼 수 있다.
// 2-1. 3가지 섹션의 영화를 볼 수 있다. (popular, top rated, upcomming)
// 2-2. 각 영화에 마우스를 올려두면 제목 / 장르 / 점수 / 인기도 / 청불여부 확인 가능
// 2-3. 각 섹션의 영화를 슬라이드로 넘기면서 볼 수 있다.

// 3. movie Detail 페이지에서 영화에 대한 디테일 정보를 볼 수 있다. [ 포스터 / 제목 / 줄거리 / 점수 / 인기도 / 청불여부 / 예산 / 이익 / 러닝타임 등]
// 3-1. trailer를 누르면 trailer를 볼 수 있다.
// 3-2. 관련 영화를 볼 수 있다.

// 4. 영화 검색을 할 수 있다.
// 5. 영화 정렬을 할 수 있다.
// 6. 영화를 필터링할 수 있다.

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
