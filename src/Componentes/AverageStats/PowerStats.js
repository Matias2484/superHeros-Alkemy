import React, { useState, useEffect } from "react";
import "./PowerStats.css";

export function PowerStats({ heroesTeam }) {
  const [sumaTeam, setSumaTeam] = useState({});

  let powerStats = heroesTeam.map((stats) => stats.powerstats);

  useEffect(() => {
    let max = 0;

    const statsSuma = heroesTeam.reduce((acc, hero) => {
      for (const key in hero.powerstats) {
        let value = Number.parseInt(hero.powerstats[key]) || 0;
        acc[key] = (acc[key] || 0) + value;
      }
      for (const key in hero.appearance) {
        if (key === "weight" || key === "height") {
          let value = hero.appearance[key][1].split(" ", 1);
          acc[key] = (acc[key] || 0) + Number.parseInt(value[0]);
        }
      }
      return acc;
    }, {});
    setSumaTeam(statsSuma);
    for (const [key, value] of Object.entries(statsSuma)) {
      if (value > max && key !== "weight" && key !== "height") {
        max = value;
      }
    }
  }, [heroesTeam]);

  return (
    <div>
      {sumaTeam !== {}
        ? Object.keys(sumaTeam).map((key, i) => {
            return (
              <table class="table table-hover table-dark">
                <thead>
                  <tr>
                    <th className="heading">
                      {key === "weight" || key === "height"
                        ? `${
                            key.charAt(0).toUpperCase() + key.slice(1)
                          } Average`
                        : `Total ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                    </th>
                    <th className="title">
                      {key === "weight" || key === "height"
                        ? (sumaTeam[key] / heroesTeam.length).toFixed()
                        : sumaTeam[key]}
                    </th>
                  </tr>
                </thead>
              </table>
            );
          })
        : null}
    </div>
  );
}
