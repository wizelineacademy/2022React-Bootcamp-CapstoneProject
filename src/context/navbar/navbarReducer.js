import { SET_VISIBLE } from "./../../types/navbar/index";

const NavbarReducer = (state, action) => {
  switch (action.type) {
    case SET_VISIBLE:
      return {
        active: action.payload,
      };
    default:
      return state;
  }
};

export default NavbarReducer;
