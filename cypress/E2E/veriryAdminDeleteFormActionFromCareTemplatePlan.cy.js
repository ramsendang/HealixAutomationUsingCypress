/// <reference types = "Cypress"/>

import AdminLogin from "../support/pageObject/admonlogin.po";
import DeleteForm from "../support/pageObject/deleteform.po";

describe('Open Website', () => {
  const adminLoginPo = new AdminLogin();
  const deleteFormPO = new DeleteForm();
  before(()=>{
    cy.fixture('/admininfo.json').then(function(data){
      globalThis.data = data;
    })
    cy.visit("/");
  })

    // verify signin button
    context('Login with admin account',()=>{
      it('and verify admin login',()=>{
        adminLoginPo.clickSigninButton();
        adminLoginPo.clickSignWithPasswordButton();
        adminLoginPo.enterEmailandContiinue(data.user);
        adminLoginPo.enterPassword(data.password);
        adminLoginPo.clickonSignin();
        adminLoginPo.verifyLoginSuccess();
      })
      it('and verify admin is able to delete a form from a care plan template', ()=>{
        deleteFormPO.openCarePlanTemplateTab();
        deleteFormPO.clickOnAnyCarePlanTemplate();
        deleteFormPO.changeStatusToInReview();
        deleteFormPO.clickonUpdateButton();
        deleteFormPO.verifyAlertMessage();
        deleteFormPO.clickOnFormAndFields();
        deleteFormPO.clickonDeleteIcon();
        deleteFormPO.clickonOK();
        deleteFormPO.verifyAlertMessageForDeleteAction();
        deleteFormPO.navigateToOverviewTab();
        deleteFormPO.clickonUpdateButton();
        deleteFormPO.verifyAlertMessage();
      })

  })


})