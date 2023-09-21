# Feature examples: https://github.com/webdriverio/cucumber-boilerplate/tree/main/src/features
Feature: Ecommerce products
  As a developer
  I want to be able to add and remove products

Background:
  Given I open the site "/"

  Scenario: Is not Google
      Then I expect that the title is not "Google"

  Scenario: User can navigate and add/delete items
      Then I expect that the title is "demo shop"
      When I click on the button "#basket" 
      Then I expect that element "h4" contains the text "you picked 0 items"