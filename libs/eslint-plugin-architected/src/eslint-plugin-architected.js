import { EslintPluginBuilderLayeredArchitecture } from "eslintpluginbuilder-layered-architecture";

const getConfig = () => {
  return new EslintPluginBuilderLayeredArchitecture()
    .withLayer("4-data")
    .withLayer("3-domain", ["4-data"])
    .withLayer("2-application", ["4-data", "3-domain"])
    .withLayer("1-infrastructure", ["4-data", "3-domain", "2-application"])
    .withLayer("0-presentation", ["4-data", "3-domain", "2-application", "1-infrastructure"])
    .build("@fulstackjosh/architected");
};

export default {
  configs: {
    "clean-ish": getConfig(),
  },
};
