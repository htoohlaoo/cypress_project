describe("multipage tests",()=>{
    beforeEach(()=>{
        cy.visit('/examples');
    })
    it('multipage clicks nav tests',()=>{
        cy.getDataTest('nav why cypress').click();
        cy.contains(/Why Cypress\?/i).should('exist');
        cy.getDataTest('nav examples').click();
        cy.contains(/Examples/i).should('exist');
        cy.getDataTest('nav fundamentals').click();
        cy.contains(/Fundamentals/i).should('exist');
        cy.getDataTest('nav best practices').click();
        cy.contains(/Best Practices/i).should('exist');
        
    })
    it('post button intercept test ',()=>{
        cy.intercept("POST",'http://localhost:3000/examples',{
            body:{message:"Success!"},
        })
    })

    it('grudge test',()=>{
        // cy.contains(/One/i).should('not.exist');
        cy.contains('Fruit one').should('not.exist');

        cy.getDataTest('grudge-input').type('Fruit one');
        cy.getDataTest('grudge-btn').click();
        cy.contains('Fruit one').should('exist');

        cy.getDataTest('list').within(()=>{
            cy.get('li').its(0).within(()=>{
                cy.get('button').click();
            })
        })
        cy.contains('Fruit one').should('not.exist');


    })


})