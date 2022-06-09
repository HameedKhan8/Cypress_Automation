Feature: FashionPhile

  I want to open FashionPhile and do some shoppiong

  @focus
  Scenario: Admin login and goto FashionPhile website and do some shoppiong
    When User Go to FashionPhile website
    And Search for Chanel Black hand bag
    And Select third item from search
    Then User Add Item to Bag
    And User Goto Checkout
    And User Enter Invalid Email