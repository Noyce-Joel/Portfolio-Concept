import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  active1: null,
  active2: null,
  active3: null,
  work: null,
  world: null,
  projects: null,
  rotateLeft: null,
  rotateRight: null,
  type: true,
  nav: null,
  isNowVisible: null,
  slideShow: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE1":
      return { ...state, active1: action.payload };
    case "SET_ACTIVE2":
      return { ...state, active2: action.payload };
    case "SET_ACTIVE3":
      return { ...state, active3: action.payload };
    case "SET_WORK":
      return { ...state, work: action.payload };
    case "SET_WORLD":
      return { ...state, world: action.payload };
    case "SET_PROJECTS":
      return { ...state, projects: action.payload };
    case "SET_ROTATELEFT":
      return { ...state, rotateLeft: action.payload };
    case "SET_ROTATERIGHT":
      return { ...state, rotateRight: action.payload };
    case "SET_TYPE":
      return { ...state, type: action.payload };
    case "SET_NAV":
      return { ...state, nav: action.payload };
    case "SET_ISNOWVISIBLE":
      return { ...state, isNowVisible: action.payload };

    case "SET_SLIDESHOW":
      return { ...state, slideShow: action.payload };
    default:
      return state;
  }
};

const StateContext = createContext({});

export function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

// Create a custom hook to use the context
export function useAppState() {
  return useContext(StateContext);
}
