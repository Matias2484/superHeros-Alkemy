import React from "react";
import "./SuperHeroe.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addHeroTeam, removeHero } from "../../Actions";
import swal from "sweetalert";

export default function Superheroe({ nombre, img, id, alignment, hero }) {
  const dispatch = useDispatch();
  const href = window.location.href;
  let team = useSelector((state) => state.teamSuperHeroe);
  var good = team.filter((e) => e.alignment === "good");
  var bad = team.filter((e) => e.alignment === "bad");

  function handleAdd(id) {
    let searchHero = team.find((e) => e.id === id.id);
    // eslint-disable-next-line
    if (good.length >= 3 && id.alignment == "good") {
      return swal({
        text: `You can´t have more than 3 ${alignment} heros`,
        icon: "warning",
        button: true,
      });
      // eslint-disable-next-line
    } else if (bad.length >= 3 && id.alignment == "bad") {
      return swal({
        text: `You can´t have more than 3 ${alignment} heros`,
        icon: "warning",
        button: true,
      });
    } else if (team.length === 6) {
      return swal({
        text: `You can´t have more than 6 heros`,
        icon: "warning",
        button: true,
      });
    } else if (searchHero) {
      return swal({
        text: `${nombre} is already in your Team `,
        icon: "warning",
        button: true,
      });
    } else {
      dispatch(addHeroTeam(id));
    }
  }

  function deleteTeam(id) {
    dispatch(removeHero(id));
  }

  return (
    <div className="heroe">
      <div className="heroe_contenedor">
        {/* card-front */}
        <div className="heroe_front">
          <span className="hero-name">{nombre}</span>
          <img
            src={img}
            alt="Avatar"
            style={{ width: "18rem", height: "25rem" }}
          />
        </div>
        {/* card back-front */}
        <div className="heroe_back">
          <h3>{nombre}</h3>
          <p>
            {" "}
            Alignment: {alignment.charAt(0).toUpperCase() + alignment.slice(1)}
          </p>

          <div className="btn-group p-2" role="group">
            <Link to={`/home/${id}`} className="btn btn-outline-primary mr-2">
              info
            </Link>
          </div>
          {href === "http://localhost:3000/home" ? (
            <div className="btn-group p-2" role="group">
              <button
                onClick={() => handleAdd(hero)}
                className="btn btn-outline-primary mr-2"
              >
                Add to your Team
              </button>
            </div>
          ) : (
            <div div className="btn-group p-2" role="group">
              <button
                onClick={() => deleteTeam(id)}
                className="btn btn-outline-primary mr-2"
              >
                Delete from team
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
