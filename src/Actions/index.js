import axios from "axios";

export const GET_SUPERHEROE = "GET_SUPERHEROE";
export const GET_SUPERHEROE_DETAIL = "GET_SUPERHEROE_DETAIL";
export const HERO_ERROR = "HERO_ERROR";
export const TEAM_ERROR = "TEAM_ERROR";
export const ADD_HERO_TEAM = "ADD_HERO_TEAM";
export const GET_TEAM = "GET_TEAM";
export const CREATE_TEAM = "CREATE_TEAM";
export const DELETE_TEAM = "DELETE_TEAM";
export const REMOVE_HERO = "REMOVE_HERO";
export const USER = "USER";
const URL = "https://superheroapi.com/api.php/10159533180979708/";

//Obtener SuperHeroe por nombre
export const getSuperHeroe = (name) => {
  return async function (dispatch) {
    await axios
      .get(`${URL}/search/${name}`)
      .then((resp) => {
        dispatch({
          type: GET_SUPERHEROE,
          payload: resp.data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
//Obtener SuperHeroe Detalle
export const getSuperHeroeDetail = (id) => {
  return function (dispatch) {
    axios
      .get(`${URL}/${id}`)
      .then((response) => {
        dispatch({
          type: GET_SUPERHEROE_DETAIL,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
//Agregar Heroe al Team
export function addHeroTeam(payload) {
  return {
    type: ADD_HERO_TEAM,
    payload,
  };
}

//Remover SuperHeroe del Team
export function removeHero(id) {
  return {
    type: REMOVE_HERO,
    payload: id,
  };
}

//Loguearse
export function logIn(token) {
  localStorage.setItem("token", token);
  return {
    type: USER,
    payload: token,
  };
}
//Desloguearse
export function logOut() {
  localStorage.removeItem("token");

  return {
    type: USER,
    payload: undefined,
  };
}
