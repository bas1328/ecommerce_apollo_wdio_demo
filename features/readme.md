# How to add a custom selector

To use custom selector you need to add a new entry to the [customSelectors](https://mobius-gitlab.bt.com/dsl/frontend-framework/marketplace/converged-basket/-/blob/test/default-cucumber-tests/apps/dummy-store/features/customSelectors.ts) object. Then reference it in the feature file as an original selector.

Example:

```ts
const customSelectors = {
    '|add echo|': "[data-testid='add-item-echo']",
    ...
}


Using "|pipe|" is recommended to avoid name collision with the regular selectors

# Feature examples: https://github.com/webdriverio/cucumber-boilerplate/tree/main/src/features
