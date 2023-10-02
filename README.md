# CYPRESS
TESTED WEBSITE: DEMOQA

SCENARIOS:
        -Login bookstore website
        -Logout
        -Search a book
        -Add and delete a book
        -Change row number on profile page
        

Ide Plugins:-add only
            -cypress snippets
            -cypress fixture-intellisense

reporter: "@shelex/cypress-allure-plugin": "^2.40.0"

commands:

      open test runner  =>  "npx cypress open"
      run with reporter =>   " npx cypress run --browser chrome --spec cypress/e2e/TestProject/testcasesofBookstore.cy.js --          env allure=true "

      
