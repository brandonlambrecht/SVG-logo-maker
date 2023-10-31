const { Square, Triangle, Circle } = require("../lib/shapes");

describe("Circle", () => {
  it("should render svg for a green circle element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';

    const shape = new Circle("green")

    expect(shape.render()).toEqual(expectedSvg)
  });
  it("should accept a fillColor param", () => {

    const shape = new Circle("blue")

    expect(shape.color).toBe("blue")

  });
});

describe("Triangle", () => {
  it("should render svg for a green green triangle element", () => {
    const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="green" />';

    const shape = new Circle("green")

    expect(shape.render()).toEqual(expectedSvg)
  });
  it("should accept a fillColor param", () => {

    const shape = new Triangle("blue")

    expect(shape.color).toBe("blue")

  });
});

describe("Square", () => {
  it("should render svg for a green square element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';

    const shape = new Square("green")

    expect(shape.render()).toEqual(expectedSvg)
  });
  it("should accept a fillColor param", () => {

    const shape = new Square("blue")

    expect(shape.color).toBe("blue")

  });
});






