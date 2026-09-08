Feature: Real-Time Bus Ride Request

  Scenario: Successful bus request
    Given the user has GPS location enabled
    And selects an available bus line with open seats
    When they confirm the boarding request from their current position
    Then the system should assign an available nearby bus
    And display vehicle details, driver information, and estimated time of arrival (ETA)

  Scenario: Booking attempt with no available seats
    Given all colectivos for the selected line are fully occupied
    When the user attempts to request a ride
    Then the app should notify that no seats are currently available
    And offer an option to subscribe to availability alerts