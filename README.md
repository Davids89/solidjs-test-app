## Solidjs test app

This app has been created to experiment with Solid.js. It is created with a Docker container to ease the setup in any device.

The project has been developed using Typescript and Vite as builder.

## How to Install and Run the project

First of all we need to create an imagen from the `Dockerfile`. A `Makefile` has been written to facilitate the process.

### Create the App image

We only has to run the next command: `make build`.

### Run the project

With `make start` we launch the Vite start command.

### Stop the container

Whenever you want to stop the process you only has to run: `make stop`

## How to Use the Project

To show the site, go to you browser and navigate to `localhost:3000`
