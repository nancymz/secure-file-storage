import React from "react";
import renderer from "react-test-renderer";
import NavBar from "./NavBar";

describe("NavBar", () => {
  test("Component renders as expected", () => {
    const component = renderer.create(<NavBar />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
