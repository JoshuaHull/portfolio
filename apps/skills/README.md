# Skills

Vue app with interactive demos of some of my skills.

## Structure

[pages](./src/pages) is the starting point for each page of the app. Some pages define
page-components under `./src/pages/{page}/components`. All general-use components
are under [components](./src/components/).

## Pages

[Aws](./src/pages/aws-page/) - TODO

[DDD](./src/pages/ddd-page/)

[Dotnet](./src/pages/dotnet-page/)

[Frontend](./src/pages//frontend-page/)

[Source Control](./src/pages/git-page/)

[Messaging](./src/pages/messaging-page/)

[Monoliths](./src/pages/monoliths-page/) - TODO

[Rest](./src/pages/rest-page/)

[Solid](./src/pages/solid-page/) - TODO

[Tests](./src/pages/tests-page/)

## Running the app:

From anywhere:  
`rush dev --to skills`

From this directory:  
`npm run dev`

## Running tests:

From anywhere:  
`rush test:nowatch`

From this directory:  
`npm run test`
