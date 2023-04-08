# Skills

Vue app with interactive demos of some of my skills.

## Structure

[pages](./src/pages) is the starting point for each page of the app. Some pages define
page-components under `./src/pages/{page}/components`. All general-use components
are under [components](./src/components/).

## Pages

[Aws](./src/pages/skills-aws-page/) - TODO

[DDD](./src/pages/skills-ddd-page/)

[Dotnet](./src/pages/skills-dotnet-page/)

[Frontend](./src/pages//skills-frontend-page/)

[Source Control](./src/pages/skills-git-page/)

[Messaging](./src/pages/skills-messaging-page/)

[Monoliths](./src/pages/skills-monoliths-page/) - TODO

[Rest](./src/pages/skills-rest-page/)

[Solid](./src/pages/skills-solid-page/) - TODO

[Tests](./src/pages/skills-tests-page/)

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
