const SVG = require("../lib/svg");
const { Square } = require("../lib/shapes");

describe("SVG", () => {
  it("should render a 300 x 200 svg element", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';

    expect(2 + 2).toEqual(14)
  });

});

