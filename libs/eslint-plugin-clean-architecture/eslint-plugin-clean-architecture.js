module.exports = {
  configs: {
    all: {
      plugins: ["clean-architecture"],
      rules: {
        "no-restricted-imports": "off",
      },
      overrides: [
        {
          files: ["**/1-infrastructure/**"],
          rules: {
            "no-restricted-imports": ["error", {
              patterns: [{
                group: ["**/1-presentational"],
                message: "Do not import presentational code into the infrastructure layer",
              }],
            }],
          },
        },
        {
          files: ["**/2-application/**"],
          rules: {
            "no-restricted-imports": ["error", {
              patterns: [{
                group: ["**/1-infrastructure"],
                message: "Do not import infrastructure code into the application layer",
              }, {
                group: ["**/1-presentational"],
                message: "Do not import presentational code into the application layer",
              }],
            }],
          },
        },
        {
          files: ["**/3-domain/**"],
          rules: {
            "no-restricted-imports": ["error", {
              patterns: [{
                group: ["**/1-infrastructure"],
                message: "Do not import infrastructure code into the domain layer",
              }, {
                group: ["**/1-presentational"],
                message: "Do not import presentational code into the domain layer",
              }, {
                group: ["**/2-application"],
                message: "Do not import application code into the domain layer",
              }],
            }],
          },
        },
        {
          files: ["**/4-data/**"],
          rules: {
            "no-restricted-imports": ["error", {
              patterns: [{
                group: ["**/1-infrastructure"],
                message: "Do not import infrastructure code into the data layer",
              }, {
                group: ["**/1-presentational"],
                message: "Do not import presentational code into the data layer",
              }, {
                group: ["**/2-application"],
                message: "Do not import application code into the data layer",
              }, {
                group: ["**/3-domain"],
                message: "Do not import domain code into the data layer",
              }],
            }],
          },
        },
      ],
    }
  }
}
