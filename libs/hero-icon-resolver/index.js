export default function resolve(componentName) {
  if (componentName.endsWith("OutlineIcon"))
    return {
      name: `${componentName.slice(0, componentName.length - "OutlineIcon".length)}Icon`,
      from: "@heroicons/vue/24/outline",
    };

  else if (componentName.endsWith("SolidIcon"))
    return {
      name: `${componentName.slice(0, componentName.length - "SolidIcon".length)}Icon`,
      from: "@heroicons/vue/24/solid",
    };
};
