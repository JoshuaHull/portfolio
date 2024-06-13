/**
 * @param {number} index
 * @param {number} initialCurrentTab
 * @param {string} slot
 * @returns {string}
*/
export const headerPartial = (index, initialCurrentTab, slot) => {
  const radioId = `tab${index}radio`;
  const checked = index === initialCurrentTab ? "checked" : "";

  return `
    <input
      class="tabbed-document-radio"
      type="radio"
      name="tabradio"
      id="${radioId}"
      ${checked}
    />
    <label
      class="tabbed-document-header"
      for="${radioId}"
    >
      ${slot}
    </label>
  `;
};
