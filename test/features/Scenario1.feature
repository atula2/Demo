Feature: Category Filter

  Scenario: Default of Item Filter
    Given I am on the Automation Test Store login page
    When I login with  valid username and password
    Then I should see i am on the account page
    When I click on the Home icon
    Then I should be on the Automation Test Store homepage
    When I click on MAKEUP Category
    Then verify I can see MAKEUP page is displayed
    Then verify the Sort By fillter Default as Date Old > New
