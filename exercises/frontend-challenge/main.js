/**
 * TODO - you have got a Redux style app, the only problem being that
 * every existing implementation of Redux has been deleted from the internet!
 *
 * You need to reimplement Redux in the createStore.js file!
 *
 */
import { Polka } from "./Polka";
import { createStore } from "./createStore";

main();

function main() {

  const { dispatch, subscribe, getState } = createStore(reducer, undefined)

  const polka = new Polka({ dispatch, getState });

  polka.attach(document.querySelector(".main"));

  subscribe(() => {
    polka.changed(getState());
  })

  dispatch({ type: "init" });
}


function reducer(state = defaultState(), action) {
  switch(action.type) {
    case "AddMark":
      const { newIndex, hsl } = getRandomColor(state);
      const nextId = state.id + 1;

      const marks = [...state.marks, {
        id: nextId,
        x: action.x,
        y: action.y,
        radius: 25,
        color: hsl,
      }];

      return Object.assign({}, state, {
        id: nextId,
        marks,
        randomIndex: newIndex,
      });

    default:
      return state;
  }
}

function getRandomColor(state) {
  const { newIndex, values: [h,s,l] } = getRandomValues(state, 3);
  const hsl = `hsl(${h * 360 | 0},${s * 70 | 0  + 30}%,${l * 55 | 0 + 25}%)`;
  return { hsl, newIndex };
}

function getRandomValues({ randomValues, randomIndex }, n) {
  const spillOver = randomIndex + n - randomValues.length;
  if(spillOver > 0) {
    const fromLast = randomValues.slice(randomIndex);
    const { newIndex, values } = getRandomValues({
      randomIndex: 0,
      randomValues,
    }, spillOver);
    return { newIndex, values: fromLast.concat(values) };
  } else {
    const newIndex = randomIndex + n;
    return { newIndex, values: randomValues.slice(randomIndex, newIndex) };
  }
}

function defaultState() {
  return {
    marks: [],
    id: 0,
    randomValues: [0.66,0.46,0.73,0.02,0.65,0.78,0.58,0.76,0.88,0.26,0.7,0.76,0.89,0.59,0.14,0.94,0.17,0.92,0.53,0.17,0.52,0.92,0.51,0.25,0.15,0.41,0.13,0.19,0.16,0.48,0.8,0.02,0.19,0.55,0.24,0.37,0.57,0.19,0.17,0.03,0.47,0.59,0.9,0.95,0.24,0.35,0.38,0.37,0.7,0.81,0.59,0.86,0.31,0.33,0.54,0.52,0.66,0.24,0.55,0.51,0.16,0.32,0.2,0.4,0.51,0.49,0.44,0.52,0.48,0.24,0.83,0.97,0.22,0.77,0.57,0.34,0.22,0.65,0.74,0.53,0.33,0.62,0.02,0.29,0.16,0.52,0.01,0.2,0.32,0.04,0.12,0.44,0.47,0.06,0.6,0.53,0.32,0.17,0.37,0.87],
    randomIndex: 0,
  } 
}
