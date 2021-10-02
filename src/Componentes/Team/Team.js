import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Team.css";
import Superheroe from "../SuperHeroe/SuperHeroe";
import NavBar from "../NavBar/NavBar";
import { PowerStats } from "../AverageStats/PowerStats.js";

export default function Team() {
  let team = useSelector((state) => state.teamSuperHeroe);

  const [heroesTeam, setHeroesTeams] = useState([]);

  useEffect(() => {
    setHeroesTeams(team);
  }, [team]);

  return (
    <div>
      <NavBar />
      {team && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {team.map((e, index) => (
            <Superheroe
              key={index + 1}
              nombre={e.nombre}
              img={e.img}
              id={e.id}
              alignment={e.alignment}
            />
          ))}
        </div>
      )}
      {team.length ? (
        <div className="stats_team">
          <p className="stats_title"> Team Stats </p>
          <PowerStats heroesTeam={heroesTeam} />
        </div>
      ) : (
        <p className="team_error">You don't have a Team yet</p>
      )}
    </div>
  );
}
