
describe ('My app', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    const nameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsBox = () => cy.get('[type=checkbox]');
    const submitBtn = () => cy.get("button[id='submitBtn']");
    const foobarInput = () => cy.get('input[name=foobar]');

    it('sanity check to make sure tests work', () => {

        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({})
    })

    it('the proper elements are showing', ()=> {
        nameInput().should('exist');
        emailInput().should('exist')
        passwordInput().should('exist');
        termsBox().should('exist');
        submitBtn().should('exist')
        foobarInput().should('not.exist');

    })
    describe('Filling out the inputs and submitting', () => {
        it('can navigate to the url', () =>{
            cy.url()
            .should('include', 'localhost')
        })
    it('submit button starts out disabled', () => {
        submitBtn()
            .should('be.disabled')
    })
    //type in the inputs
    it('can type in the inputs', () => {
        nameInput()
            .should('have.value', '')
            .type('username')
            .should('have.value', 'username');
        emailInput()
            .should('have.value', '')
            .type('email')
            .should('have.value', 'email');
        passwordInput()
            .should('have.value', '')
            .type('SixOrMore')
            .should('have.value', 'SixOrMore');
    })    
    //submit button is not disabled after typing in the inputs
    it('the submit button enables when all inputs are filled out', () => {
        nameInput()
        .type('anything');
        emailInput()
        .type('email@email.com');
        passwordInput()
        .type('SixOrMoreYes')
        termsBox()
        .click()
        submitBtn()
        .should('not.be.disabled')
    })
 
    })

    describe('Adding a new user', () => {
        it('can submit a new user', () => {
            nameInput()
            .type('anything!');
          emailInput()
            .type('email@email.com');
          passwordInput()
            .type('SixOrMore');
          termsBox()
            .click();
          submitBtn()
            .click();            
        })
    })
})