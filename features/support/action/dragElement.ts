import { Selector } from 'webdriverio';
import { customSelectors } from '../../customSelectors';

/**
 * Drag a element to a given destination
 * @param  {String}   selector      The selector for the source element
 * @param  {String}   destination The selector for the destination element
 */
export default async (selector: Selector, destination: Selector) => {
  if (typeof selector === 'string') {
    selector = customSelectors[selector] || selector;
  }
  const target = await $(destination);
  await $(selector).dragAndDrop(target);
};
