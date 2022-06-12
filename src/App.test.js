import { render, screen } from "@testing-library/react";
import { Header } from "./components/layout";

test("renders logo app", () => {
  render(<Header />);
  const logoElement = screen.getByAltText(/logo/i);
  expect(logoElement).toBeInTheDocument();
});
