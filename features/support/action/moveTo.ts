import { Selector } from 'webdriverio';
import { customSelectors } from '../../customSelectors';

/**
 * Move to the given selector with an optional offset on a X and Y position
 * @param  {String}   selector  Element selector
 * @param  {String}   x        X coordinate to move to
 * @param  {String}   y        Y coordinate to move to
 */
export default async (selector: Selector, x: string, y: string) => {
  if (typeof selector === 'string') {
    selector = customSelectors[selector] || selector;
  }
  /**
   * X coordinate
   * @type {Int}
   */
  const intX = parseInt(x, 10) || undefined;

  /**
   * Y coordinate
   * @type {Int}
   */
  const intY = parseInt(y, 10) || undefined;

  await $(selector).moveTo({
    xOffset: intX,
    yOffset: intY,
  });
};
