describe("Test cases of bookstore",()=>{


    it('Login bookstore website', () => {
        //go to login page
        cy.get('').click()
        
        
    
    });
    
    it('go to login button', () => {
        
    });
    
    it('type username', () => {
        cy.get().type('',{delay: 0}); //ULTRA HIZLI YAZMAK İÇİN
    });
    
    it('type password', () => {
        cy.get().type('');
    });
    
    it('click login button', () => {
        cy.contains('').click();
        //confirmation for logged in
        expect(true).to.equal(true);
    });
    
    it('check loogged in or not', () => {
        cy.xpath("").click();
    });
    

it('', () => {
    cy.go('back');
    cy.go('forward');

    cy.get('').select('');
    cy.get().should("be.visible").and('contain.text', "");
    cy.get('').should("contain.text","");
    cy.get('').should("have.text","");//bu hard assertion
    cy.get('').should("be.visible","");//sytax bosluklu bi olsa metin gözüküyor

    cy.contains('').click();
    cy.contains("beyza kitabı").should('be.visible')

    cy.title().should('include','welcome');
    cy.url().should('include','login');
    cy.location('pathname').should('eq','/login');

    cy.get('#userName').attachFile({filePath: "photo.jpg"}, {subjectType: 'drag-n-drop'});//dosya yükleme için

    cy.route('GET', '/api/users', [{id: 1, name: 'jack'}]);
    cy.log('console a yazdır')
    cy.wait(2000);
    cy.xpath().click()


    cy.xpath("//*[contains(@id, 'see-book-"+bookName+"')]",{timeout: 3000}).click({force: true});
});

});