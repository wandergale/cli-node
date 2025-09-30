# Introduction to Node.js, v3 — Course Repository

Companion repository for the Frontend Masters course “Introduction to Node.js, v3” by Scott Moss. Use this repo to follow along as you build a CLI notes app with file-based storage, unit tests, and a basic HTTP server.

- Course page: [Introduction to Node.js, v3 (Frontend Masters)](https://frontendmasters.com/courses/node-js-v3/)
- Lesson intro: [Course introduction](https://frontendmasters.com/courses/node-js-v3/introduction/)

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Learning Outcomes](#learning-outcomes)
- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [NPM Scripts](#npm-scripts)
- [Usage](#usage)
  - [CLI Commands](#cli-commands)
  - [Data Format](#data-format)
  - [HTTP Server](#http-server)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## About the Project
This repository mirrors the structure and milestones from the Frontend Masters course. You’ll implement a simple, practical notes system that demonstrates core Node.js skills: building a CLI, working with files, structuring modules, writing tests with Jest, and spinning up a minimal HTTP server.

See the official course pages for the full outline: [course overview](https://frontendmasters.com/courses/node-js-v3/) and [lesson introduction](https://frontendmasters.com/courses/node-js-v3/introduction/).

## Features
- CLI tool to manage notes:
  - Create notes
  - List notes
  - Find/filter notes
  - Remove notes
  - Clean all notes
- File-based persistence with the `fs`/`fs/promises` module
- Unit tests with Jest
- Minimal HTTP server that renders notes as HTML
- Emphasis on ES Modules and modular design

## Learning Outcomes
- Understand Node’s non-blocking I/O model and event loop at a practical level
- Use ES Modules (`import`/`export`) in Node.js projects
- Parse CLI arguments and build commands (e.g., with `yargs`)
- Read/write JSON data as a lightweight “database”
- Implement CRUD operations and separate domain logic from I/O
- Test units with Jest, including mocks/spies
- Serve basic HTML via the built-in HTTP module

## Prerequisites
- Modern JavaScript (ES6+)
- Terminal basics
- Node.js installed (using a version manager like `nvm` is recommended)
- npm

## Tech Stack
- Node.js (ES Modules)
- yargs (CLI argument parsing)
- fs / fs.promises (File I/O)
- Jest (unit testing)

## Project Structure
```text
.
├─ src/
│  ├─ index.js            # CLI entry (can include a shebang)
│  ├─ cli/                # yargs commands & argument wiring
│  ├─ lib/                # CRUD helpers, formatting, utils
│  └─ server/             # basic HTTP server
├─ data/
│  └─ db.json             # file-based "database" of notes
├─ tests/
│  └─ notes.test.js       # Jest tests
└─ package.json
```

## Getting Started

### Installation
1. Clone and initialize:
```bash
git clone <your-repo-url> nodejs-v3-notes
cd nodejs-v3-notes
npm init -y
```

2. Enable ES Modules by adding to `package.json`:
```json
{
  "type": "module"
}
```

3. Install dependencies:
```bash
npm i yargs
npm i -D jest
```

4. Optional utilities (e.g., for IDs):
```bash
npm i uuid
```

### Configuration
- Data file: `data/db.json`
  - If it doesn’t exist, create it and initialize with an empty array:
```json
[]
```
- No required environment variables for the base project. Add as needed (e.g., `PORT`).

### NPM Scripts
Add these to `package.json` (adjust paths if needed):
```json
{
  "type": "module",
  "scripts": {
    "start": "node src/index.js",
    "dev": "node --watch src/index.js",
    "test": "jest",
    "server": "node src/server/index.js"
  }
}
```

## Usage

### CLI Commands
Create a note:
```bash
node src/index.js new --text "Buy milk"
```

List all notes:
```bash
node src/index.js all
```

Find/filter notes:
```bash
node src/index.js find --filter "milk"
```

Remove a note by id:
```bash
node src/index.js remove --id <noteId>
```

Clean all notes:
```bash
node src/index.js clean
```

Tip: Use `yargs` to define commands, arguments, and `--help` output.

### Data Format
Each note could look like:
```json
{
  "id": "a1b2c3",
  "text": "Buy milk",
  "createdAt": "2025-09-30T12:34:56.000Z"
}
```

### HTTP Server
Start the server:
```bash
npm run server
```
Visit:
- http://localhost:3000

Responsibilities:
- Read notes from `data/db.json`
- Format/interpolate notes into simple HTML
- Return HTML to the client

## Testing
Install and run tests:
```bash
npm i -D jest
npm test
```
What to test:
- CRUD helpers (create/read/filter/delete/clear)
- Edge cases (empty DB, missing fields, non-existent IDs)
- Mocks/spies for file I/O where appropriate

## Troubleshooting
- Ensure `data/db.json` exists and contains valid JSON (e.g., `[]`).
- If ES Modules import errors occur, confirm `"type": "module"` is set in `package.json`.
- For permission issues running the CLI with a shebang, you may need to `chmod +x src/index.js` and use `npm link` during development.
- Clear corrupted data by resetting `data/db.json` to `[]`.

## FAQ
**Q: Can I use CommonJS instead of ES Modules?**  
A: The course emphasizes ES Modules, but CommonJS works if you prefer. Be consistent across files.

**Q: Do I need a real database?**  
A: No. The course intentionally uses a JSON file to focus on Node fundamentals.

**Q: Where do I add new commands?**  
A: Create command modules under `src/cli/` and register them via `yargs` in `src/index.js`.

## Roadmap
- [ ] Add update command for editing existing notes
- [ ] Add pagination and sorting for `all`
- [ ] Improve HTML rendering and add basic CSS
- [ ] Persist data to a real database (e.g., SQLite, MongoDB) as an optional extension
- [ ] Add integration tests and coverage reporting

## Contributing
1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push branch: `git push origin feat/your-feature`
5. Open a Pull Request

## License
Add your preferred license here (e.g., MIT). Include a LICENSE file in the repo.

## Credits
- Course by Scott Moss on Frontend Masters:  
  - [Introduction to Node.js, v3](https://frontendmasters.com/courses/node-js-v3/)  
  - [Lesson introduction](https://frontendmasters.com/courses/node-js-v3/introduction/)
