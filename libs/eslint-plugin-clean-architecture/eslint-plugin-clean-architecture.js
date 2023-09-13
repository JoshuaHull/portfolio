/**
 * @param {boolean} withNumbers
 */
 const getFolderNames = (withNumbers) => ({
  presentational: withNumbers ? "1-presentational" : "presentational",
  infrastructure: withNumbers ? "1-infrastructure" : "infrastructure",
  application: withNumbers ? "2-application" : "application",
  domain: withNumbers ? "3-domain" : "domain",
  data: withNumbers ? "4-data" : "data",
});

/**
 * @param {boolean} withNumbers
 */
const getPresentationalConfig = (withNumbers) => {
  const folderNames = getFolderNames(withNumbers);

  return {
    files: [`**/${folderNames.presentational}/**`],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: [`**/${folderNames.infrastructure}`],
          message: "Do not import infrastructure code into the presentational layer",
        }],
      }],
    },
  };
};

/**
 * @param {boolean} withNumbers
 */
const getInfrastructureConfig = (withNumbers) => {
  const folderNames = getFolderNames(withNumbers);

  return {
    files: [`**/${folderNames.infrastructure}/**`],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: [`**/${folderNames.presentational}`],
          message: "Do not import presentational code into the infrastructure layer",
        }],
      }],
    },
  };
};

/**
 * @param {boolean} withNumbers
 */
const getApplicationConfig = (withNumbers) => {
  const folderNames = getFolderNames(withNumbers);

  return {
    files: [`**/${folderNames.application}/**`],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: [`**/${folderNames.infrastructure}`],
          message: "Do not import infrastructure code into the application layer",
        }, {
          group: [`**/${folderNames.presentational}`],
          message: "Do not import presentational code into the application layer",
        }],
      }],
    },
  };
};

/**
 * @param {boolean} withNumbers
 */
const getDomainConfig = (withNumbers) => {
  const folderNames = getFolderNames(withNumbers);

  return {
    files: [`**/${folderNames.domain}/**`],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: [`**/${folderNames.infrastructure}`],
          message: "Do not import infrastructure code into the domain layer",
        }, {
          group: [`**/${folderNames.presentational}`],
          message: "Do not import presentational code into the domain layer",
        }, {
          group: [`**/${folderNames.application}`],
          message: "Do not import application code into the domain layer",
        }],
      }],
    },
  };
};

/**
 * @param {boolean} withNumbers
 */
const getDataConfig = (withNumbers) => {
  const folderNames = getFolderNames(withNumbers);

  return {
    files: [`**/${folderNames.data}/**`],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: [`**/${folderNames.infrastructure}`],
          message: "Do not import infrastructure code into the data layer",
        }, {
          group: [`**/${folderNames.presentational}`],
          message: "Do not import presentational code into the data layer",
        }, {
          group: [`**/${folderNames.application}`],
          message: "Do not import application code into the data layer",
        }, {
          group: [`**/${folderNames.domain}`],
          message: "Do not import domain code into the data layer",
        }],
      }],
    },
  };
};

/**
 * @param {boolean} withNumbers
 * @param {boolean} withData
 * @param {boolean} allowInfraIntoPres
 */
const getConfig = (withNumbers, withData, allowInfraIntoPres) => {
  const overrides = [
    allowInfraIntoPres ? null : getPresentationalConfig(withNumbers),
    getInfrastructureConfig(withNumbers),
    getApplicationConfig(withNumbers),
    getDomainConfig(withNumbers),
    withData ? getDataConfig(withNumbers) : null,
  ];

  return {
    plugins: ["clean-architecture"],
    rules: {
      "no-restricted-imports": "off",
    },
    overrides: overrides.filter(o => o !== null),
  };
};

module.exports = {
  configs: {
    allowInfraIntoPres: getConfig(false, false, true),
    strict: getConfig(false, false, false),
    withData_allowInfraIntoPres: getConfig(false, true, true),
    withData: getConfig(false, true, false),
    withNumbers_allowInfraIntoPres: getConfig(true, false, true),
    withNumbers_withData_allowInfraIntoPres: getConfig(true, true, true),
    withNumbers_withData: getConfig(true, true, false),
    withNumbers: getConfig(true, false, false),
  }
}
