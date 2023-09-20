import { Selector } from 'webdriverio';
import { customSelectors } from '../../customSelectors';

/**
 * Select a option from a select element by it's index
 * @param  {String}   index      The index of the option
 * @param  {String}   obsolete   The ordinal indicator of the index (unused)
 * @param  {String}   selector Element selector
 *
 * @todo  merge with selectOption
 */
export default async (index: string, obsolete: never, selector: Selector) => {
  if (typeof selector === 'string') {
    selector = customSelectors[selector] || selector;
  }
  /**
   * The index of the option to select
   * @type {Int}
   */
  const optionIndex = parseInt(index, 10);

  await $(selector).selectByIndex(optionIndex);
};
