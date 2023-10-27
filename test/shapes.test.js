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

// describe("Triangle", () => {
//   it("should render svg for a green polygon element", () => {
//     const expectedSvg =
//       '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';


//   });
//   it("should accept a fillColor param", () => {
//     const expectedSvg =
//       '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';


//   });
// });

// describe("Square", () => {
//   it("should render svg for a green polygon element", () => {
//     const expectedSvg =
//       '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';

//   });
//   it("should accept a fillColor param", () => {
//     const expectedSvg =
//       '<rect x="90" y="40" width="120" height="120" fill="red" />';

//   });
// });

// describe("overarching theme", ()=>{
//   test("something more specific",()=>{
//     it("should do something specific",()=>{

//     })
//   })
// })
