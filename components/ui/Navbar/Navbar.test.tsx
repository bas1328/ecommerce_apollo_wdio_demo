import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  it("renders a Navbar", () => {
    const screen = render(<Navbar />);

    const heading = screen.getByRole("link", {
      name: /Home/i,
    });

    expect(heading).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });
});
