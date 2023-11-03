Feature: Catalog and purchasing tunnel

        Scenario: Select item from catalog
                Given I visit the website
                When I sign-in to the application
                And I mouse hover on an element of the menu
                Then I check the menu list is visible
                When I mouse hover on an element of the list
                Then I check that the sub-menu is visible
                When I click on a menu item
                Then The required page is opened
                When I mouse hover an element from the list of items
                And I add item to the Cart
                #Then I check the items added to cart
                
"""

        Scenario: Review and payments
                Given I visit the website
                #When I sign-in to the application
                And I click on proceed to checkout button
                Then I check that the shipping page is opened
                And I fill the shipping information
                And I click on next
                Then I check that the review and paimennt interface is displayed
                And I verify the exact delivery information with the shipping page
                Then I check the correspondence of the basket total with the quantity per item
                And I click on place an order
                And I check the display of the confirm message and the order number
                Then Sign-out


"""