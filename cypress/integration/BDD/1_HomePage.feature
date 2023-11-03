Feature: Home page

        Scenario: Home page top banner and logo validation
                Given I visit the website
                Then I check the presence of the default title
                And I check the presence of the LUMA logo
                And I check the possibility to sign-in
                And I check the possibility to create account

        Scenario: Menu elements validation
                Given I visit the website
                When I mouse hover on an element of the menu
                Then I check the menu list is visible
                When I mouse hover on an element of the list
                Then I check that the sub-menu is visible
                When I click on a menu item
                Then The required page is opened

        Scenario: Footer element validation
                Given I visit the website
                Then I check that the footer is visible
                And I check the footer items are visible
                And I check footer items links
