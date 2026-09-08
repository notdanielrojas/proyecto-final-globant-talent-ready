Feature: Driver Route and Capacity Management

  Scenario: Pickup confirmation and seat count update
    Given the driver is on an active route with available seats
    When a passenger submits a pickup request along the route
    Then the driver receives a notification for the requested stop
    And the available seat counter updates upon confirming the pickup