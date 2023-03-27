const importMap = {
  "OutlineIcon": "@heroicons/vue/24/outline",
  "IconOutline": "@heroicons/vue/24/outline",
  "SolidIcon": "@heroicons/vue/24/solid",
  "IconSolid": "@heroicons/vue/24/solid",
  "envelope-outline-icon": "@heroicons/vue/24/outline",
  "envelope-icon-outline": "@heroicons/vue/24/outline",
  "envelope-solid-icon": "@heroicons/vue/24/solid",
  "envelope-icon-solid": "@heroicons/vue/24/solid",
};

const unkebabify = (str) => str.replace(/-/, "").toUpperCase();
const toPascal = (str) => str.replace(/(^\w|-\w)/g, unkebabify);

export default function resolve(componentName) {
  const pascalComponentName = toPascal(componentName);

  for (let suffix in importMap) {
    const from = importMap[suffix];

    if (pascalComponentName.endsWith(suffix))
      return {
        name: `${pascalComponentName.slice(0, pascalComponentName.length - suffix.length)}Icon`,
        from,
      };
  }
};
