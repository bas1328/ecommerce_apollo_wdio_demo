import { Selector } from 'webdriverio';
import { customSelectors } from '../../customSelectors';

/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   selector Element selector
 */
export default async (selector: Selector) => {
  if (typeof selector === 'string') {
    selector = customSelectors[selector] || selector;
  }
  await $(selector).clearValue();
};
