import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import Header from './Header'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  if(!movies) return;
  
  const randomNumber = Math.floor(Math.random() * movies.length + 1);
  const mainMovie = movies[randomNumber];

  // console.log(mainMovie);

  const {title, overview, id} = mainMovie;
  
  return (
    <div>
      <Header />
      <VideoTitle title={title} overview={overview} id={id} />
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer