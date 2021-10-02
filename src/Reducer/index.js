import {
  GET_SUPERHEROE,
  GET_SUPERHEROE_DETAIL,
  ADD_HERO_TEAM,
  REMOVE_HERO,
  USER,
} from "../Actions";

var localTeam = JSON.parse(window.localStorage.getItem("teams"));

const initialState = {
  allSuperHeroes: [],
  superHeroeDetail: [],
  teamSuperHeroe: localTeam ? localTeam : [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SUPERHEROE:
      return {
        ...state,
        allSuperHeroes: action.payload,
      };

    case GET_SUPERHEROE_DETAIL:
      return {
        ...state,
        superHeroeDetail: action.payload,
      };
    case ADD_HERO_TEAM:
      return {
        ...state,
        teamSuperHeroe: state.teamSuperHeroe.concat(action.payload),
      };

    case REMOVE_HERO:
      return {
        ...state,
        teamSuperHeroe: state.teamSuperHeroe.filter(
          (hero) => hero.id !== action.payload
        ),
      };
    // return {
    //   ...state,
    //   teamSuperHeroe: { ...removeHeroe },
    // };
    case USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
