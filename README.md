## Introduction

This is a template for a NextJS frontend. It should be paired with this [Express backend template](https://github.com/ruffyhacks/template-backend) and a Posgresql database.

## How to use

- Clone this project and add your own remote
- Project setup
  - Start a new Railway project and link it to your newly created remote
  - If your project includes a backend, follow this guide [backend](https://github.com/ruffyhacks/template-backend)
- Create a .env file for your variables (use .env.example as a guide)
- Run the app locally `npm run dev`

## Tech Stack + Features

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience

### Platforms

- [Railway](https://railway.app/) – Deploy changes with every push to Github

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript
- [Prettier](https://www.npmjs.com/package/prettier) – Code formatter

### Features

- Login & Sessions - enable users to log in & maintain login across sessions
- Registration - enable new users to sign up
- _Coming Soon_ File Upload - upload a file to AWS and save the file's AWS url in your database

## Author

- Rafi Lurie ([@rafilikeruffy](https://twitter.com/rafilikeruffy))
