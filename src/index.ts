#!/usr/bin/env node

interface Note {
  content: string;
  id: number;
}

const note = process.argv[2];

if (!note) {
  console.error("cli <message>");
  process.exit(1);
}

const newNote: Note = {
  content: note,
  id: Date.now(),
};

console.log(newNote);
