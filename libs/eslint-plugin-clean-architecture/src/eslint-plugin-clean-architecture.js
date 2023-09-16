import { EslintPluginBuilderLayeredArchitecture } from "eslintpluginbuilder-layered-architecture";

/**
 * @param {boolean} withNumbers
 * @param {boolean} allowInfraIntoPres
 */
const getConfig = (withNumbers, allowInfraIntoPres) => {
  if (withNumbers && allowInfraIntoPres)
    return new EslintPluginBuilderLayeredArchitecture()
      .withLayer("3-domain")
      .withLayer("2-application", ["3-domain"])
      .withLayer("1-infrastructure", ["3-domain", "2-application"])
      .withLayer("0-presentation", ["3-domain", "2-application", "1-infrastructure"])
      .build("clean-architecture");

  if (withNumbers)
    return new EslintPluginBuilderLayeredArchitecture()
      .withLayer("3-domain")
      .withLayer("2-application", ["3-domain"])
      .withLayer("1-infrastructure", ["3-domain", "2-application"])
      .withLayer("1-presentation", ["3-domain", "2-application"])
      .build("clean-architecture");

  if (allowInfraIntoPres)
    return new EslintPluginBuilderLayeredArchitecture()
      .withLayer("domain")
      .withLayer("application", ["domain"])
      .withLayer("infrastructure", ["domain", "application"])
      .withLayer("presentation", ["domain", "application", "infrastructure"])
      .build("clean-architecture");

  return new EslintPluginBuilderLayeredArchitecture()
    .withLayer("domain")
    .withLayer("application", ["domain"])
    .withLayer("infrastructure", ["domain", "application"])
    .withLayer("presentation", ["domain", "application"])
    .build("clean-architecture");
};

export default {
  configs: {
    "strict": getConfig(false, false),
    "strictWithNumbers": getConfig(true, false),
    "loose": getConfig(false, true),
    "looseWithNumbers": getConfig(true, true),
  },
};
