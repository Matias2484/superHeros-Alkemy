import React from "react";
import { useState } from "react";
import { getSuperHeroe } from "../../Actions";
import { useSelector, useDispatch } from "react-redux";
import Superheroe from "../SuperHeroe/SuperHeroe";
import NavBar from "../NavBar/NavBar";

import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  let allSuperHeroes = useSelector((state) => state.allSuperHeroes);
  const [superHeroe, setSuperHeroe] = useState("");

  const handleChange = (e) => {
    setSuperHeroe(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSuperHeroe(superHeroe));
  };

  return (
    <div className="superHeroes_container">
      <NavBar />

      <form>
        <div className="form-inline">
          <input
            type="text"
            autoComplete="off"
            placeholder="Search SuperHero..."
            onChange={handleChange}
            className="mr-sm-2"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </form>

      {allSuperHeroes && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {allSuperHeroes.map((e, index) => (
            <Superheroe
              key={index + 1}
              nombre={e.name}
              img={e.image.url}
              id={e.id}
              alignment={e.biography.alignment}
              hero={{
                nombre: e.name,
                img: e.image.url,
                powerstats: e.powerstats,
                id: e.id,
                alignment: e.biography.alignment,
                appearance: e.appearance,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
