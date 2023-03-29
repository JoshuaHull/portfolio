const importMap = {
  "OutlineIcon": "@heroicons/vue/24/outline",
  "IconOutline": "@heroicons/vue/24/outline",
  "SolidIcon": "@heroicons/vue/24/solid",
  "IconSolid": "@heroicons/vue/24/solid",
  "OutlineMiniIcon": "@heroicons/vue/20/outline",
  "IconMiniOutline": "@heroicons/vue/20/outline",
  "SolidMiniIcon": "@heroicons/vue/20/solid",
  "IconMiniSolid": "@heroicons/vue/20/solid",
};

const unkebabify = (str) => str.replace(/-/, "").toUpperCase();
const toPascal = (str) => str.replace(/(^\w|-\w)/g, unkebabify);

export function heroIconResolver(componentName) {
  const pascalComponentName = toPascal(componentName);

  for (let suffix in importMap) {
    const from = importMap[suffix];
    const name = `${pascalComponentName.slice(0, pascalComponentName.length - suffix.length)}Icon`;

    if (pascalComponentName.endsWith(suffix))
      return {
        name,
        from,
      };
  }
};