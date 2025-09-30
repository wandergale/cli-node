export type Operation = "add" | "sub" | "mul" | "div" | "pow" | "sqrt";

export class Calculator {
  static add(...nums: number[]): number {
    if (nums.length === 0) throw new Error("add requires at least 1 number");
    return nums.reduce((a, b) => a + b, 0);
  }

  static sub(first: number, ...rest: number[]): number {
    if (rest.length === 0) throw new Error("sub requires at least 2 numbers");
    return rest.reduce((a, b) => a - b, first);
  }

  static mul(...nums: number[]): number {
    if (nums.length === 0) throw new Error("mul requires at least 1 number");
    return nums.reduce((a, b) => a * b, 1);
  }

  static div(first: number, ...rest: number[]): number {
    if (rest.length === 0) throw new Error("div requires at least 2 numbers");
    return rest.reduce((a, b) => {
      if (b === 0) throw new Error("Division by zero");
      return a / b;
    }, first);
  }

  static pow(base: number, exp: number): number {
    return Math.pow(base, exp);
  }

  static sqrt(x: number): number {
    if (x < 0) throw new Error("sqrt requires non-negative number");
    return Math.sqrt(x);
  }
}