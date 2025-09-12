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
  const movie_list = [
    {
      image: "1.jpg",
      baslik: "Kaptan Amerika",
      aciklama: "Güzel bir film",
    },
    {
      image: "2.jpg",
      baslik: "Araba Hırsızları",
      aciklama: "Güzel bir film",
    },
    {
      image: "3.jpg",
      baslik: "Araba Hırsızları",
      aciklama: "Güzel bir film",
    },
    {
      image: "4.jpg",
      baslik: "Araba Hırsızları",
      aciklama: "Güzel bir film",
    },
  ];

  return (
    <div>
      <h1>Moview List</h1>
      <div id="movie-list">
        {movie_list.map((movie, index) => (
          <Movie key={index} movieObj={movie} />
        ))}
      </div>
    </div>
  );
}

function Movie({ movieObj }) {
  return (
    <div className="movie">
      <img src={"/img/" + movieObj.image} alt="" />
      <h3>{movieObj.baslik}</h3>
      <p>{movieObj.aciklama}</p>
    </div>
  );
}

export default App;
