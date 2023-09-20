import { Selector } from 'webdriverio';
import { customSelectors } from '../../customSelectors';

/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
export default async (selector: Selector) => {
  if (typeof selector === 'string') {
    selector = customSelectors[selector] || selector;
  }
  await $(selector).scrollIntoView();
};
