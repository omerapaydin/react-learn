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
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <a href="#" className="navbar-brand">
            Movie App
          </a>
        </div>
      </nav>
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
      is_new: true,
    },
    {
      image: "2.jpg",
      baslik: "Araba Hırsızları",
      aciklama: "Güzel bir film",
      is_active: true,
      is_new: true,
    },
    {
      image: "3.jpg",
      baslik: "Araba Hırsızları",
      aciklama: "Güzel bir film",
      is_active: true,
      is_new: false,
    },
    {
      image: "4.jpg",
      baslik: "Araba Hırsızları",
      aciklama: "Güzel bir film",
      is_active: true,
      is_new: true,
    },
  ];

  return (
    <div className="container">
      <h2 className="title">Movie List</h2>

      {movie_list.filter((m) => m.is_active).length == 0 ? (
        <div>Film bulunamadı</div>
      ) : (
        <div
          id="movie-list"
          className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4"
        >
          {movie_list.map((m, index) => (
            <Movie key={index} movieObj={m} />
          ))}
        </div>
      )}
    </div>
  );
}

function Movie({ movieObj }) {
  return (
    <div className="col">
      {movieObj.is_active && (
        <div className="card movie position-relative">
          <img src={"/img/" + movieObj.image} alt="" className="card-img-top" />
          <div className="card-body">
            <h2 className="h5 card-title">{movieObj.title}</h2>
            <p className="card-text mb-0">{movieObj.description}</p>
            {movieObj.is_new && (
              <span className="position-absolute top-0 end-0 badge bg-danger m-1">
                New
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
