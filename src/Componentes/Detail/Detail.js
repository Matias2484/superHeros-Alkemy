import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSuperHeroeDetail } from "../../Actions/index";
import { Link } from "react-router-dom";
import "./Detail.css";
import NavBar from "../NavBar/NavBar";

export default function Detail() {
  const dispatch = useDispatch();
  const heroDetail = useSelector((state) => state.superHeroeDetail);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSuperHeroeDetail(id));
  }, [dispatch, id]);

  if (heroDetail.name) {
    return (
      <div className="">
        <NavBar />
        <div className="container">
          <div className="">
            <img
              className="img-fluid"
              src={heroDetail.image.url}
              alt={heroDetail.name}
            ></img>
          </div>

          <div class="hero_detail">
            <div className="fs-2">
              <h1 className="display-2">
                {heroDetail.name.charAt(0).toUpperCase() +
                  heroDetail.name.slice(1)}
              </h1>
              <p>
                <span className="hero_text">Weight: </span>
                {heroDetail.appearance.weight.map((w) => (
                  <span key={w}>{w}/ </span>
                ))}
              </p>
              <p>
                <span className="hero_text">Height: </span>
                {heroDetail.appearance.height.map((h) => (
                  <span key={h}>{h}/ </span>
                ))}
              </p>
              <p>
                <span className="hero_text"> Aliases : </span>
                {heroDetail.biography.aliases.map((alias) => (
                  <span key={alias}>{alias}/ </span>
                ))}
              </p>
              <p>
                <span className="hero_text">Eye Color:</span>{" "}
                {heroDetail.appearance["eye-color"]}
              </p>
              <p>
                <span className="hero_text">Hair Color: </span>{" "}
                {heroDetail.appearance["hair-color"]}
              </p>
              <p>
                <span className="hero_text">Work Base: </span>
                {heroDetail.work.base}
              </p>
              <div className="text-center pb-4">
                <Link className="link" to="/home">
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}
