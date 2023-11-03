Feature: Sign-in to the application

        Scenario: Sign-in
                Given I visit the website
                When I click on sign in button
                Then I check that sign in page is opened
                When I authenticate
                Then I check that I logged in to the application
