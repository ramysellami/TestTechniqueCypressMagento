Feature: Sign-UP

        Scenario: Password robustness
                Given I visit the website
                When I click on the create an account button
                Then I check that the account creation page is opened
                When I keep Password field empty
                Then No password message displayed
                When I type weak password
                Then Weak message displayed
                When I type medium password
                Then Medium message displayed
                When I type strong password
                Then Strong message displayed
                When I type very strong password
                Then Very strong message displayed


        Scenario: Account creation
                Given I visit the website
                When I click on the create an account button
                Then I check that the account creation page is opened
                Then I create an account