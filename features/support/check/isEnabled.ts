import type { Selector } from 'webdriverio';
import { customSelectors } from '../../customSelectors';

/**
 * Check if the given selector is enabled
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the given selector
 *                              is enabled or not
 */
export default async (selector: Selector, falseCase: boolean) => {
  if (typeof selector === 'string') {
    selector = customSelectors[selector] || selector;
  }

  /**
   * The enabled state of the given selector
   * @type {Boolean}
   */
  const isEnabled = await $(selector).isEnabled();

  if (falseCase) {
    expect(isEnabled).not.toEqual(
      true,
      // @ts-expect-error
      `Expected element "${selector}" not to be enabled`,
    );
  } else {
    expect(isEnabled).toEqual(
      true,
      // @ts-expect-error
      `Expected element "${selector}" to be enabled`,
    );
  }
};
