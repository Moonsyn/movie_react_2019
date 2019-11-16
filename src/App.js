import React from 'react';
import axios from "axios";
import Movie from "./Movies";
import "./App.css";

//react는 자동적으로 class component의 render method를 실행하려고 한다.
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () =>{
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //console.log(movies);
    this.setState({ movies, isLoading: false });
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return <section className="container">
      {isLoading ? <div className="loader">
        <span className="loader_text">Loading...</span>
      </div> : movies.map(movie => {
      console.log(movie);
      return (
        <div className="movies">
          <Movie 
            key={movie.id}
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
            genres={movie.genres}
        />
        </div>
      );
    })}</section>;
  }
}
export default App;

/*
Mounting
constructor() -> static getDerivedStateFromProps()
-> render() -> componentDidMount()

Updating
static getDerivedStateFromProps() -> shouldComponentUpdate()
-> render() -> getSnapshotBeforeUpdate()
-> componentDidUpdate()

Unmounting
componenetWillUnmount()
*/