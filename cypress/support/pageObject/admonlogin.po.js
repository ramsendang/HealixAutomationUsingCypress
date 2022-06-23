class AdminLogin{

    
    //click on sign in button
    clickSigninButton(){
        const signInButton = cy.get(':nth-child(2) > .MuiButton-root');
        signInButton.should("exist");
        signInButton.click();
    }
    clickSignWithPasswordButton(){
        const signinwithPassword = cy.get('[data-test="button-sign-in-email-and-password"]');
        signinwithPassword.click();
    }

    enterEmailandContiinue(email){
       const emailField = cy.get('[data-test="input-email"] > .MuiOutlinedInput-root > .MuiOutlinedInput-input')
       
       emailField.should("exist");
       emailField.type(email);
    }

    enterPassword(password){
        const passwordfield = cy.get('[data-test="input-password"] > .MuiOutlinedInput-root > .MuiOutlinedInput-input');
        passwordfield.should("exist");
        passwordfield.type(password);
    }

    clickonSignin(){
        const signinbutton = cy.get('[data-test="button-sign-in"]')
        signinbutton.should("exist")
        signinbutton.click();
    }
    verifyLoginSuccess(){
        cy.location("pathname").should("include","home");
    }
}

export default AdminLogin