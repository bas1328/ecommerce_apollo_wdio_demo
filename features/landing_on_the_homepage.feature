# Feature examples: https://github.com/webdriverio/cucumber-boilerplate/tree/main/src/features
Feature: Ecommerce products
  As a developer
  I want to be able to add and remove products

Background:
  Given I open the site "/"

  Scenario: Is not Google
      Then I expect that the title is not "Google"

  Scenario: Is correct
      Then I expect that the title is "demo shop"


