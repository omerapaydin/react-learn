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
      is_active: true,
    },
    {
      image: "2.jpg",
      baslik: "Araba Hırsızları",
      aciklama: "Güzel bir film",
      is_active: true,
    },
    {
      image: "3.jpg",
      baslik: "Araba Hırsızları",
      aciklama: "Güzel bir film",
      is_active: false,
    },
    {
      image: "4.jpg",
      baslik: "Araba Hırsızları",
      aciklama: "Güzel bir film",
      is_active: true,
    },
  ];

  return (
    <div>
      <h1>Moview List</h1>

      {movie_list.filter((m) => m.is_active).length === 0 ? (
        <div>Listede film bulunmamaktadır.</div>
      ) : (
        <div id="movie-list">
          {movie_list.map((movie, index) => (
            <Movie key={index} movieObj={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

function Movie({ movieObj }) {
  return (
    <div>
      {movieObj.is_active && (
        <div className="movie">
          <img src={"/img/" + movieObj.image} alt="" />
          <h3>{movieObj.baslik}</h3>
          <p>{movieObj.aciklama}</p>
        </div>
      )}
    </div>
  );
}

export default App;
