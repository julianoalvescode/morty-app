import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Footer } from "@/design-system/components";

describe("Footer", () => {
  it("renders without crashing", () => {
    render(<Footer />);
  });

  it("displays the correct text", () => {
    const { getByText } = render(<Footer />);

    expect(getByText("Made by Barba")).toBeInTheDocument();
  });
});
