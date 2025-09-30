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

#!/usr/bin/env node
import { Calculator, Operation } from "./calculator";

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
  const nums = toNumbers(numArgs);
  let result: number;

  switch (op) {
    case "add":
      result = Calculator.add(...nums);
      break;
    case "sub":
      result = Calculator.sub(nums[0], ...nums.slice(1));
      break;
    case "mul":
      result = Calculator.mul(...nums);
      break;
    case "div":
      result = Calculator.div(nums[0], ...nums.slice(1));
      break;
    case "pow":
      if (nums.length !== 2) throw new Error("pow needs exactly 2 numbers");
      result = Calculator.pow(nums[0], nums[1]);
      break;
    case "sqrt":
      if (nums.length !== 1) throw new Error("sqrt needs exactly 1 number");
      result = Calculator.sqrt(nums[0]);
      break;
    default:
      throw new Error(`Unknown operation: ${op}\n\n${usage()}`);
  }

  console.log(result);
} catch (err) {
  console.error((err as Error).message);
  process.exit(1);
}