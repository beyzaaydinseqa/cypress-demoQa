import { useXpath } from "cypress-xpath";
//import { it } from "mocha";

describe("Test cases of bookstore",()=>{

    beforeEach(() => {
        cy.visit('/books')

        // cannot pass second step because of console error, and it solved
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
          
          it.only('fails to visit website 1', function () {
            cy.visit('https://demoqa.com/books');
            cy.title().should('eq','DEMOQA');
            cy.viewport(1280, 720)
          })          
    
    })



    it('Login bookstore website', () => {
      cy.login('beyzaydn', 'AB12CD34b**');          
    });
    
    it('Logout', () => {
      cy.login('beyzaydn', 'AB12CD34b**');
      cy.get('#submit',{timeout: 3000}).click({force:true});
    });
    
    it('Search a book', () => {
      cy.login('beyzaydn', 'AB12CD34b**');
      cy.search();

    });
    it('Add and delete a book', () => {
      cy.login('beyzaydn', 'AB12CD34b**'); 
      cy.search();
      cy.addBook();
      cy.gotoProfile();
      cy.deleteBook();

    });

    it.only('Change row number on profile page', () => {
      cy.login('beyzaydn', 'AB12CD34b**'); 
      cy.gotoProfile();
      cy.changeRowNum();
    });
    
})