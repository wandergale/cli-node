#!/usr/bin/env node

// import { count } from './utils.ts'

// interface Note {
//   content: string;
//   id: number;
// }

// const note = process.argv[2];

// if (!note) {
//   console.error("cli <message>");
//   process.exit(1);
// }

// const newNote: Note = {
//   content: note,
//   id: Date.now(),
// };

// console.log(newNote);

import { Calculator, type Operation } from "./calculator.ts";

function usage(): string {
  return [
    "Usage:",
    "  calc add 1 2 3",
    "  calc sub 10 3 2",
    "  calc mul 2 3 4",
    "  calc div 20 2 2",
    "  calc pow 2 8",
    "  calc sqrt 9",
  ].join("\n");
}

const [, , opArg, ...numArgs] = process.argv;

if (!opArg) {
  console.error(usage());
  process.exit(1);
}

const op = opArg as Operation;

const toNumbers = (args: string[]): number[] => {
  const nums = args.map((a) => Number(a));
  if (nums.some((n) => Number.isNaN(n))) {
    throw new Error("All operands must be valid numbers");
  }
  return nums;
};

try {
  const nums = toNumbers(numArgs); // number[]
  let result: number;

  switch (op) {
    case "add":
      if (nums.length < 1) throw new Error("add needs at least 1 number");
      result = Calculator.add(...nums);
      break;

    case "sub": {
      if (nums.length < 2) throw new Error("sub needs at least 2 numbers");
      const [first, ...rest] = nums; // first: number after the guard
      result = Calculator.sub(first, ...rest);
      break;
    }

    case "mul":
      if (nums.length < 1) throw new Error("mul needs at least 1 number");
      result = Calculator.mul(...nums);
      break;

    case "div": {
      if (nums.length < 2) throw new Error("div needs at least 2 numbers");
      const [first, ...rest] = nums;
      result = Calculator.div(first, ...rest);
      break;
    }

    case "pow":
      if (nums.length !== 2) throw new Error("pow needs exactly 2 numbers");
      result = Calculator.pow(nums[0]!, nums[1]!); // safe after guard
      break;

    case "sqrt":
      if (nums.length !== 1) throw new Error("sqrt needs exactly 1 number");
      result = Calculator.sqrt(nums[0]!); // safe after guard
      break;
  }

  console.log(result);
} catch (err) {
  console.error((err as Error).message);
  process.exit(1);
}