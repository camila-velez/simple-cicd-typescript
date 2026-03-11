/**
 * Unit tests for calculator functions
 * Loads the compiled sum.js so functions are available in window.
 */

declare global {
  interface Window {
    sum: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches functions to window
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./sum.js");
});

describe("sum", () => {
  it("adds two positive numbers", () => {
    expect(window.sum(2, 3)).toBe(5);
  });

  it("adds negative numbers and positive numbers", () => {
    expect(window.sum(-1, 1)).toBe(0);
  });

  it("returns 0 when both are 0", () => {
    expect(window.sum(0, 0)).toBe(0);
  });
});

describe("subtract", () => {
  it("subtracts two numbers", () => {
    expect(window.subtract(5, 3)).toBe(2);
  });

  it("works with negative numbers", () => {
    expect(window.subtract(-5, -2)).toBe(-3);
  });
});

describe("multiply", () => {
  it("multiplies two numbers", () => {
    expect(window.multiply(4, 3)).toBe(12);
  });

  it("returns 0 when multiplying by zero", () => {
    expect(window.multiply(5, 0)).toBe(0);
  });
});

describe("divide", () => {
  it("divides two numbers", () => {
    expect(window.divide(10, 2)).toBe(5);
  });

  it("works with negative numbers", () => {
    expect(window.divide(-10, 2)).toBe(-5);
  });

  it("throws error when dividing by zero", () => {
    expect(() => window.divide(10, 0)).toThrow("Division by zero");
  });
});

export {};