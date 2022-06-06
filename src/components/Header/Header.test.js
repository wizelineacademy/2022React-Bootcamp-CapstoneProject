import Logo from "components/Logo";
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

let container;

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("should render logo", () => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Logo />, container);
  });

  expect(document.getElementById("logo")).toBeDefined();
});
