import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("renders a Footer", () => {
    const screen = render(<Footer />);

    const heading = screen.getByText(/lorem/i);

    expect(heading).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });
});
