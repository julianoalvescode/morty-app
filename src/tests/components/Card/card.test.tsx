import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Card } from "./../../../design-system/components";
import { MockCharacter } from "../../__ mocks __/character";

describe("Card Component", () => {
  it("renders the card with the provided data", () => {
    const { getByAltText, getByText } = render(<Card {...MockCharacter} />);

    expect(getByAltText(MockCharacter.name)).toBeInTheDocument();
    expect(getByText("Vivo")).toBeInTheDocument();
    expect(getByText("Última localização conhecida::")).toBeInTheDocument();
    expect(getByText(MockCharacter.location.name)).toBeInTheDocument();
  });
});
