const importMap = {
  "OutlineIcon": "@heroicons/vue/24/outline",
  "IconOutline": "@heroicons/vue/24/outline",
  "SolidIcon": "@heroicons/vue/24/solid",
  "IconSolid": "@heroicons/vue/24/solid",
  "outline-icon": "@heroicons/vue/24/outline",
  "icon-outline": "@heroicons/vue/24/outline",
  "solid-icon": "@heroicons/vue/24/solid",
  "icon-solid": "@heroicons/vue/24/solid",
  "OutlineMiniIcon": "@heroicons/vue/20/outline",
  "IconMiniOutline": "@heroicons/vue/20/outline",
  "SolidMiniIcon": "@heroicons/vue/20/solid",
  "IconMiniSolid": "@heroicons/vue/20/solid",
  "outline-mini-icon": "@heroicons/vue/20/outline",
  "icon-mini-outline": "@heroicons/vue/20/outline",
  "solid-mini-icon": "@heroicons/vue/20/solid",
  "icon-mini-solid": "@heroicons/vue/20/solid",
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
