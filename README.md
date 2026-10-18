<p align="center">
  <img alt="NestJS Clean" src=".github/banner.svg" width="400px"/>
</p>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/rafaelfachinelli/nestjs-clean?color=3498db&style=for-the-badge">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/rafaelfachinelli/nestjs-clean?color=3498db&style=for-the-badge">
  <a href="https://rafaelfachinelli.com">
    <img alt="Developed by Rafael Fachinelli" src="https://img.shields.io/badge/Developer-Rafael_Fachinelli-3498db?style=for-the-badge">
  </a>
  <img alt="License" src="https://img.shields.io/badge/License-MIT-3498db?style=for-the-badge">
</p>

<p align="center">
  <a href="#information_source-about">About</a> •
  <a href="#memo-tasks">Tasks</a> •
  <a href="#arrow_forward-run">Run</a> •
  <a href="#hammer_and_wrench-technologies">Technologies</a> •
  <a href="#boy-author">Author</a> •
  <a href="#balance_scale-license">License</a>
</p>

---

## :information_source: About

🏛️ A forum API built with NestJS following Clean Architecture and Domain-Driven Design. The domain layer (entities, aggregates, value objects, use cases and repository contracts) does not know about the framework; NestJS, Prisma, JWT and the storage live in the infrastructure layer. Students ask questions, answer, comment, attach files and choose the best answer; domain events send notifications when a question gets an answer or a best answer.

Use cases are covered by unit tests with in-memory repositories, and the HTTP layer by end-to-end tests against a PostgreSQL database.

Built in 2024 to study software architecture in the backend.

---

## :memo: Tasks

<div align="center">
<details>
<summary>Click to view</summary>

<details>
<summary>🧱 Core and domain</summary>

|State|Task|
|:---:|:---|
|:heavy_check_mark:|Entities, aggregate root, watched list and unique ID|
|:heavy_check_mark:|Either for use case results and domain errors|
|:heavy_check_mark:|Domain events and event handlers|
|:heavy_check_mark:|Forum use cases: questions, answers, comments, attachments, best answer|
|:heavy_check_mark:|Notification use cases: send and read|

</details>

<details>
<summary>🔌 Infrastructure</summary>

|State|Task|
|:---:|:---|
|:heavy_check_mark:|Prisma repositories and PostgreSQL migrations|
|:heavy_check_mark:|Authentication with JWT (RS256) and Passport|
|:heavy_check_mark:|Password hashing with bcrypt|
|:heavy_check_mark:|Attachment upload to an S3-compatible bucket (Cloudflare R2)|
|:heavy_check_mark:|Environment validated with Zod|
|:heavy_check_mark:|Request validation with Zod pipes|

</details>

<details>
<summary>🧪 Tests</summary>

|State|Task|
|:---:|:---|
|:heavy_check_mark:|Unit tests with in-memory repositories (Vitest)|
|:heavy_check_mark:|End-to-end tests with Supertest|

</details>

</details>
</div>

---

## :arrow_forward: Run

You need [Node.js](https://nodejs.org/) and [Docker](https://www.docker.com/). Create a `.env` with `DATABASE_URL`, `JWT_PRIVATE_KEY`, `JWT_PUBLIC_KEY`, `CLOUDFLARE_ACCOUNT_ID`, `AWS_BUCKET_NAME`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` and `PORT`.

```bash
# Start PostgreSQL
docker compose up -d

# Install dependencies and create the tables
npm install
npx prisma migrate dev

# Start the API in watch mode
npm run start:dev

# Unit tests
npm test
```

> Example requests are in [`client.http`](client.http).

---

## :hammer_and_wrench: Technologies

<div align="center">

|Server|Tests and tooling|
|:---:|:---:|
|[NestJS](https://nestjs.com/)|[Vitest](https://vitest.dev/)|
|[TypeScript](https://www.typescriptlang.org/)|[Supertest](https://github.com/ladjs/supertest)|
|[Prisma](https://www.prisma.io/)|[Faker](https://fakerjs.dev/)|
|[PostgreSQL](https://www.postgresql.org/)|[Docker Compose](https://docs.docker.com/compose/)|
|[Passport JWT](https://www.passportjs.org/)|[ESLint](https://eslint.org/)|
|[Zod](https://zod.dev/)|[Prettier](https://prettier.io/)|
|[AWS SDK (S3 / R2)](https://aws.amazon.com/sdk-for-javascript/)||

</div>

---

## :boy: Author

<div align="center">

<a href="https://rafaelfachinelli.com">
  <img src="https://github.com/rafaelfachinelli.png" width="100px" alt="Rafael Fachinelli"/>
  <br/>
  <sub><b>Rafael Fachinelli</b></sub>
</a>

Tech Lead and software engineer. Get in touch!

[![Portfolio](https://img.shields.io/badge/-rafaelfachinelli.com-3498db?style=flat-square&logo=googlechrome&logoColor=white)](https://rafaelfachinelli.com)
[![LinkedIn](https://img.shields.io/badge/-Rafael_Fachinelli-0a66c2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafaelfachinelli/)
[![GitHub](https://img.shields.io/badge/-rafaelfachinelli-000?style=flat-square&logo=github&logoColor=white)](https://github.com/rafaelfachinelli)
[![E-mail](https://img.shields.io/badge/-rafael.l.a.fachinelli@gmail.com-ea4335?style=flat-square&logo=gmail&logoColor=white)](mailto:rafael.l.a.fachinelli@gmail.com)

</div>

---

## :balance_scale: License

This project is under the [MIT license](./LICENSE).
