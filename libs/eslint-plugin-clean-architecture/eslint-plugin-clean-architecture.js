/**
 * @param {boolean} withNumbers
 */
 const getFolderNames = (withNumbers, allowInfraIntoPres) => ({
  presentation: withNumbers ? `${allowInfraIntoPres ? "0" : "1"}-presentation` : "presentation",
  infrastructure: withNumbers ? "1-infrastructure" : "infrastructure",
  application: withNumbers ? "2-application" : "application",
  domain: withNumbers ? "3-domain" : "domain",
  data: withNumbers ? "4-data" : "data",
});

/**
 * @param {boolean} withNumbers
 * @param {boolean} allowInfraIntoPres
 */
const getpresentationConfig = (withNumbers, allowInfraIntoPres) => {
  const folderNames = getFolderNames(withNumbers, allowInfraIntoPres);

  return {
    files: [`**/${folderNames.presentation}/**`],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: [`**/${folderNames.infrastructure}`],
          message: "Do not import infrastructure code into the presentation layer",
        }],
      }],
    },
  };
};

/**
 * @param {boolean} withNumbers
 * @param {boolean} allowInfraIntoPres
 */
const getInfrastructureConfig = (withNumbers, allowInfraIntoPres) => {
  const folderNames = getFolderNames(withNumbers, allowInfraIntoPres);

  return {
    files: [`**/${folderNames.infrastructure}/**`],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: [`**/${folderNames.presentation}`],
          message: "Do not import presentation code into the infrastructure layer",
        }],
      }],
    },
  };
};

/**
 * @param {boolean} withNumbers
 * @param {boolean} allowInfraIntoPres
 */
const getApplicationConfig = (withNumbers, allowInfraIntoPres) => {
  const folderNames = getFolderNames(withNumbers, allowInfraIntoPres);

  return {
    files: [`**/${folderNames.application}/**`],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: [`**/${folderNames.infrastructure}`],
          message: "Do not import infrastructure code into the application layer",
        }, {
          group: [`**/${folderNames.presentation}`],
          message: "Do not import presentation code into the application layer",
        }],
      }],
    },
  };
};

/**
 * @param {boolean} withNumbers
 * @param {boolean} allowInfraIntoPres
 */
const getDomainConfig = (withNumbers, allowInfraIntoPres) => {
  const folderNames = getFolderNames(withNumbers, allowInfraIntoPres);

  return {
    files: [`**/${folderNames.domain}/**`],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: [`**/${folderNames.infrastructure}`],
          message: "Do not import infrastructure code into the domain layer",
        }, {
          group: [`**/${folderNames.presentation}`],
          message: "Do not import presentation code into the domain layer",
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
 * @param {boolean} allowInfraIntoPres
 */
const getDataConfig = (withNumbers, allowInfraIntoPres) => {
  const folderNames = getFolderNames(withNumbers, allowInfraIntoPres);

  return {
    files: [`**/${folderNames.data}/**`],
    rules: {
      "no-restricted-imports": ["error", {
        patterns: [{
          group: [`**/${folderNames.infrastructure}`],
          message: "Do not import infrastructure code into the data layer",
        }, {
          group: [`**/${folderNames.presentation}`],
          message: "Do not import presentation code into the data layer",
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
    allowInfraIntoPres ? null : getpresentationConfig(withNumbers, allowInfraIntoPres),
    getInfrastructureConfig(withNumbers, allowInfraIntoPres),
    getApplicationConfig(withNumbers, allowInfraIntoPres),
    getDomainConfig(withNumbers, allowInfraIntoPres),
    withData ? getDataConfig(withNumbers, allowInfraIntoPres) : null,
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
