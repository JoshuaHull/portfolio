/**
 * @param {string} slot
 * @returns {string}
*/
export const contentPartial = (slot) => {
  return `
    <article class="tabbed-document">
      <section class="tabbed-document-content">
        ${slot}
      </section>
    </article>
  `;
};
