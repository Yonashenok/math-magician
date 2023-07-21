import operate from "../components/Logic/operate";
describe("To test operation functionality", () => {
  it("To test substraction", () => {
    expect(operate(3, 2, "-")).toBe("1");
  });
  it("To test addition", () => {
    expect(operate(3, 2, "+")).toBe("5");
  });
  it("To test division", () => {
    expect(operate(4, 2, "÷")).toBe("2");
  });
  it("To test multiplication", () => {
    expect(operate(4, 2, "x")).toBe("8");
  });
  it("To test modulo", () => {
    expect(operate(4, 2, "%")).toBe("0");
  });
});
