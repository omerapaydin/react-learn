import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <MoviewList />
    </>
  );
}

function Header() {
  return (
    <div id="header">
      <h1>Header</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa facilis
        at harum sunt mollitia nostrum inventore voluptatibus cupiditate atque
        optio quisquam voluptas illum, dolorum ex quae iste, nesciunt quia
        ipsum.
      </p>
    </div>
  );
}
function MoviewList() {
  return (
    <div>
      <h1>Moview List</h1>
      <div id="movie-list">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
}

function Movie() {
  return (
    <div className="movie">
      <h3>Movie</h3>
      <p>Film açıklaması</p>
    </div>
  );
}

export default App;
