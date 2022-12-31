## Design decisions

SDK design

### 1. Where to start

The main file of the application (entrypoint) is `src/app.ts`, which is a class `LOTR` that has a dependency classe (`Movie`).
The main class `LOTR` has an optional attribute `AuthToken`, which is required for the Movie API, but optional for Book for example.
This SDK uses external API - https://the-one-api.dev/

### 2. SDK design

This SDK provides only one service in the `src/services` folder, and that is the `Movie` service to provide the list of movies.
`Types` are used to define interfaces used by this SDK and the API response.
`Tests` contain all the tests for the services, using Jest.
`Npm build` will compile typescript to javascript.
