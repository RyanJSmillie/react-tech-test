import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/Search";
import setSearchResults from "../components/App";

describe("Search", () => {
  const { asFragment } = render(<Search setSearchResults={setSearchResults} />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("button displays correct text", () => {
    const { getByText } = render(
      <Search setSearchResults={setSearchResults} />
    );

    expect(getByText("Search")).toBeInstanceOf(HTMLButtonElement);
  });
});
