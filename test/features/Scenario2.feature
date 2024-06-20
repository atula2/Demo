

Feature: Cart
  
  Scenario: 01 Add to cart
    Given I am on the Automation Test Store login page
    When I login with  valid username and password
    Then I should see i am on the account page
    Then I should be on the Automation Test Store homepage
    When I click on MAKEUP Category
    Then I can see MAKEUP page is displayed
    When I click the second item on grid
    Then I can see the item detail
    And I chose the quantity value
    And I click Add to Cart
    Then Verify I can see the item in my shopping cart and total price
    When I click on the home icon
    Then I should see I am back at the homepage
    And I hove at the cart icon
    Then I can see all the item and price I have selected
    And Verify the price and amount of all Item
