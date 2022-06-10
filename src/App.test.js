import { render, screen } from "@testing-library/react";
import Navbar from "./components/Navbar/Navbar";

test("renders learn react link", () => {
  render(<Navbar />);
  const logo = screen.getByText(/furniture/i);
  expect(logo).toBeInTheDocument();
});
