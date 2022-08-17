#  Create React App

## Introduction

### node.js 설치

```bash
# node.js 설치 후
node -v
# npx 설치 후
npx
```
### 프로젝트 생성

```bash
npx create-react-app my-app
cd my-app
npm start
```

package.json에 실행 가능한 script 정보 있음
`npm start` 혹은  `npm run start`로 실행

- src : 모든 파일 넣을 곳



## 구조

```
src
├ App.js
├ Index.js
├ components
│  └ Movie.js
└ routes
  └ Detail.js
  └ Home.js
```



## 코드

### Index.js

```react
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```



### App.js

```react
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home"


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
```



### Home.js

```react
import { useEffect, useState } from "react";
import Movie from "../components/Movie";


function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json()
    setMovies(json.data.movies)
    setLoading(false)
  }
  useEffect(() => {
    getMovies()
  }, [])
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
```



### Detail.js

```react
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function Detail() {
  const { id } = useParams()
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()
  }
  useEffect(() => {
    getMovie()
  }, [])
  return (
    <h1>Detail</h1>
  )
}

export default Detail
```



### Movie.js

```react
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


function Movie({id, coverImg, title, summary, genres}) {
  return (
    <div>
      <img src={coverImg} alt={title}/>
      <h2>
        <Link to={`/movie/${id}`}>
          {title}
        </Link>
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...`: summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie
```

