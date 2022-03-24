import TYPES from "../types";

export const increaseAction = (payload) => ({
  type: TYPES.increase,
  payload: payload,
});

export const decreaseAction = (payload) => ({
  type: "DECREASE",
  payload: payload,
});

// export const decreaseAction = (payload) => {
//   fetch("http://google.com/alguma coisa");
//   // TODO: manipula os eventos
//   return {
//     type: "MANIPULA",
//     payload: payload,
//   };
// };