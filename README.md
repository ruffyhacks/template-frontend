## Introduction
This is a template for a NextJS frontend. It should be paired with this [Express backend template](https://github.com/ruffyhacks/template-backend) and a Posgresql database.

## How to use

- Clone this project and then push it to a new remote
- Project setup
  - Start a new railway project and link it to your new remote
  - Add a Postgres db to your new project
  - If needed, add another Github repo to your project for the [backend](https://github.com/ruffyhacks/template-backend)
- Create a .env file for your variables (use .env.example as a guide)
- Migrate the database `npx prisma migrate dev --name init`
- Run the app locally `npm run dev`

## Tech Stack + Features

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience

### Platforms

- [Railway](https://railway.app/) – Deploy the app with every Github push + easily provision a PostgreSQL database (no login required)


### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### Capabilities

- Login & Sessions - enable users to log into the app and store a session for next time
- Registration - enable new users to sign up
- *Coming Soon* File Upload - upload a file to AWS and save the file's AWS url in your database

## Author

- Rafi Lurie ([@rafilurie](https://twitter.com/rafilikeruffy))