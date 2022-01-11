import { useState } from "react";
import MainNavbar from "./Components/MainNavbar";
import MovieCard from "./Components/MovieCard";
import AddMovies from "./Components/AddMovies";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjDP660IMVh8lpOcF3LCXgRBMudLvzhuRxA&usqp=CAU",
      title: "jaws",
      rate: 1,
      trailer: "https://youtu.be/U1fu_sA7XhE",
      discription:
        "Avatar derives from a Sanskrit word meaning descent and when it first appeared in English in the late 18th century, it referred to the descent of a deity to the earth—typically, the incarnation in earthly form of Vishnu or another Hindu deity.",
    },
    {
      id: uuidv4(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2VP63XKPH-r9kqz_avG9gVyFmIvhv4wQiw&usqp=CAU",
      title: "titanic",
      rate: 1,
      trailer: "https://youtu.be/kVrqfYjkTdQ",
      discription:
        "Avatar derives from a Sanskrit word meaning descent and when it first appeared in English in the late 18th century, it referred to the descent of a deity to the earth—typically, the incarnation in earthly form of Vishnu or another Hindu deity.",
    },
    {
      id: uuidv4(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBBYXD36mqPXWmVFgrfc6-SbbvuDQ6hkE5w&usqp=CAU",
      title: "avatar",
      rate: 5,
      trailer: "https://youtu.be/6ziBFh3V1aM",
      discription:
        "Avatar derives from a Sanskrit word meaning descent and when it first appeared in English in the late 18th century, it referred to the descent of a deity to the earth—typically, the incarnation in earthly form of Vishnu or another Hindu deity.",
    },
    {
      id: uuidv4(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9G2t9fbv61SM2A-Y352tfI5IfLL_E4hmJXQ&usqp=CAU",
      title: "gone girl",
      rate: 2,
      trailer: "https://youtu.be/0VGD_jLyE9Y",
      discription:
        "Avatar derives from a Sanskrit word meaning descent and when it first appeared in English in the late 18th century, it referred to the descent of a deity to the earth—typically, the incarnation in earthly form of Vishnu or another Hindu deity.",
    },
    {
      id: uuidv4(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVrVWH0eKN4XEFh05N2zCa6g4EFCzPDt0Mw&usqp=CAU",
      title: "the road",
      rate: 4,
      trailer: "https://youtu.be/94KcI0gLq1A",
      discription:
        "Avatar derives from a Sanskrit word meaning descent and when it first appeared in English in the late 18th century, it referred to the descent of a deity to the earth—typically, the incarnation in earthly form of Vishnu or another Hindu deity.",
    },
    {
      id: uuidv4(),
      image:
        "https://www.joblo.com/wp-content/uploads/2019/12/venom-let-there-be-carnage-poster-2-819x1024-1-400x600.jpg",
      title: "venom",
      rate: 3,
      trailer: "https://youtu.be/u9Mv98Gr5pY",
      discription:
        "Avatar derives from a Sanskrit word meaning descent and when it first appeared in English in the late 18th century, it referred to the descent of a deity to the earth—typically, the incarnation in earthly form of Vishnu or another Hindu deity.",
    },
    {
      id: uuidv4(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnLbrjDAlr8Plaf1azHJNIXPFCrGlHmKG3g&usqp=CAU",
      title: "fight club",
      rate: 2,
      trailer: "https://youtu.be/qtRKdVHc-cE",
      discription:
        "Avatar derives from a Sanskrit word meaning descent and when it first appeared in English in the late 18th century, it referred to the descent of a deity to the earth—typically, the incarnation in earthly form of Vishnu or another Hindu deity.",
    },
    {
      id: uuidv4(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwKy1nwZrZGhrlbAqxEKkHookXcbuUbb1Kg&usqp=CAU",
      title: "furry",
      rate: 5,
      trailer: "https://youtu.be/DNHuK1rteF4",
      discription:
        "Avatar derives from a Sanskrit word meaning descent and when it first appeared in English in the late 18th century, it referred to the descent of a deity to the earth—typically, the incarnation in earthly form of Vishnu or another Hindu deity.",
    },
  ]);
  const [newMovie, setNewMovie] = useState({
    id: Math.random(),
    title: " ",
    image: " ",
    date: " ",
    rate: 0,
  });

  const [search, setSearch] = useState(" ");
  const [rating, setRating] = useState(0);
  const [toggle, setToggle] = useState(false);
  const handleRating = (newRating) => setRating(newRating);
  const handleSearch = (search) => {
    setSearch(search.target.value);
  };
  const handleModal = () => {
    setToggle(!toggle);
    if (newMovie.title.length !== 0 && newMovie.image.length !== 0) {
      setMovies([...movies, newMovie]);
      setToggle(!toggle);
    } else {
      setToggle(!toggle);
    }
  };
  const handleAddMovie = (e) => {
    setNewMovie(e.target.title);
  };
  return (
    <div className="App">
      <Router>
        <MainNavbar
          search={search}
          handleSearch={handleSearch}
          rating={rating}
          handleRating={handleRating}
          handleModal={handleModal}
        />
        <Switch>
          <Route path="/about/:id">
            <MovieDetails movies={movies} />
          </Route>
          <Route exact path="/">
            <AddMovies
              toggle={toggle}
              handleModal={handleModal}
              newMovie={newMovie}
              handleAddMovie={handleAddMovie}
            />
            <MovieCard movies={movies} search={search} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
