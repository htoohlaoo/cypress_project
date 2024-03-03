describe('Form Tests',()=>{
    beforeEach(()=>{
        cy.visit('/forms')
    })
    it('form correct email test',()=>{
        cy.getDataTest('email-input').find('input').as('em_input');
        cy.getDataTest('email-btn').as('em_btn');
        //make sure that success message is not exist before click

        //enter and submit with correct email
        cy.get('@em_input').type('htoohlaoo7@gmail.com');
        cy.contains(/Successfully subbed: htoohlaoo7@gmail.com/i).should('not.exist');
        cy.contains(/Invalid email : htoohlaoo7@gmail.com/i).should('not.exist');
        cy.get('@em_btn').click();
        cy.contains(/Successfully subbed: htoohlaoo7@gmail.com/i).should('exist');
        cy.wait(3000);
        cy.contains(/Successfully subbed: htoohlaoo7@gmail.com/i).should('not.exist');

    })
})