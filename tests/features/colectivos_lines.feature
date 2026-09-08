Feature: Colectivo Line Selection and Inquiry

  Scenario: Add a colectivo line to favorites
    Given the user is on the bus line search screen
    When they search for "Line 5000" and select it
    And press the "Add to Favorites" button
    Then the line should be saved in their shortcuts section

  Scenario: View route path and fare details
    Given the user selects a colectivo line
    When they check the route details
    Then the app should display the map with the route path
    And show the updated fare cost per section