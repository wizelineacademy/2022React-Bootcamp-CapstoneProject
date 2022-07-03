import { useReducer } from "react";
import NavbarContext from "./navbarContext";
import NavbarReducer from "./navbarReducer";
import { SET_VISIBLE } from "./../../types";

const NavbarState = (props) => {
  const initialState = {
    active: false,
  };

  const [state, dispatch] = useReducer(NavbarReducer, initialState);

  const setVisible = (band) => {
    dispatch({
      type: SET_VISIBLE,
      payload: band,
    });
  };

  return (
    <NavbarContext.Provider value={{ active: state.active, setVisible }}>
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavbarState;
