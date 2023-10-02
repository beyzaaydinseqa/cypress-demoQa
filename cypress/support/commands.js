// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => { 
    //go to login page
    cy.get('#login',{timeout: 3000}).click({force:true});
    // enter username
    cy.get('#userName').type(username);
    // enter pass
    cy.get('#password').type(password);
    //click login
    cy.get('#login',{timeout: 3000}).click({force:true});
    //assertion for login
    cy.xpath("(//*[contains(text(),'User')]//following::label)[1]").should('contain','beyzaydn');

})

Cypress.Commands.add('search', (username, password) => { 
    //**** VARIABLES */
    const bookName = "Git Pocket Guide";
    //**** END */
    cy.get('#searchBox').should('be.visible').type(bookName);
    cy.get('#basic-addon2').click({force:true});
    cy.xpath("//*[contains(@id, 'see-book-"+bookName+"')]",{timeout: 5000}).type('{enter}');
})

Cypress.Commands.add('addBook', () => { 
    //cy.xpath("//*[contains(@id, 'addNewRecordButton')]").click({force:true});
    cy.xpath("(//*[contains(@id, 'addNewRecordButton')])[2]").click({force:true});
    //assertion popup alert for added the item
    cy.on('window:alert',(txt)=>{
    expect(txt).to.contains('Book added to your collection.');
    })
    cy.contains('Tamam').click({force:true});
})

Cypress.Commands.add('gotoProfile', () => { 

    cy.xpath("//span[contains(text(),'Profile')]").click();

})

Cypress.Commands.add('deleteBook', () => { 

    cy.xpath("(//span[contains(@id,'delete-record-undefined')])[1]").click();
    cy.get('.modal-body').should('be.visible');
    cy.get('#closeSmallModal-ok').click();
    //assertion popup alert for deleted the item
    cy.on('window:alert',(txt)=>{
        expect(txt).to.contains('Book deleted.');
        })
        cy.contains('Tamam').click({force:true});
})

Cypress.Commands.add('changeRowNum', () => { 

    cy.get('select').select('10 rows').should('have.value', '10');
    
})