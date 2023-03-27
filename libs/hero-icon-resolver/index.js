const importMap = {
  "OutlineIcon": "@heroicons/vue/24/outline",
  "IconOutline": "@heroicons/vue/24/outline",
  "SolidIcon": "@heroicons/vue/24/solid",
  "IconSolid": "@heroicons/vue/24/solid",
};

export default function resolve(componentName) {
  for (let suffix in importMap) {
    const from = importMap[suffix];

    if (componentName.endsWith(suffix))
      return {
        name: `${componentName.slice(0, componentName.length - suffix.length)}Icon`,
        from,
      };
  }
};
