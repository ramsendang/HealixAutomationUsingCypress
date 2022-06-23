class DeleteForm{
    openCarePlanTemplateTab(){
        const carePlanTemplateTab = cy.get('[data-test="button-careplan-templates"] > .jss112');
        carePlanTemplateTab.should("exist");
        carePlanTemplateTab.click();
    }
    clickOnAnyCarePlanTemplate(){
        const carePlanTemplate = cy.get('[data-testid="MuiDataTableBodyCell-0-1"]');
        carePlanTemplate.should("exist");
        carePlanTemplate.click();
    }

    changeStatusToInReview(){
        const status = cy.get("#mui-component-select-status");
        status.should("exist");
        status.click()
        const option = cy.get('[data-test="new-care-plan-template-form-status-dropdown-in_review-option"]');
        option.should("exist");
        option.click();
    }

    clickonUpdateButton(){
        const updateButton = cy.get('[data-test="button-create-careplan"]');
        updateButton.should("exist");
        updateButton.wait(500);
        updateButton.click();
    }

    verifyAlertMessage(){
        const alertMessage = cy.get('.MuiAlert-message')
        alertMessage.should("contain", "Template updated - existing revision updated");
    }

    clickOnFormAndFields(){
        const formandFields = cy.get('[data-test="new-careplan-template-forms-tab"]');
        formandFields.should("exist");
        formandFields.click();
    }

    clickonDeleteIcon(){
        const deleteIcon = cy.get('[data-testid="MuiDataTableBodyCell-9-0"] > .jss283 > .MuiButtonBase-root > [data-testid="DeleteIcon"]');
        deleteIcon.should("exist");
        deleteIcon.click();
    }

    clickonOK(){
        const ok = cy.get('.css-kyse2m > :nth-child(2)');
        ok.should("exist");
        ok.click();
    }

    verifyAlertMessageForDeleteAction(){
        const alertMessageforDeleteAction = cy.get('.MuiAlert-message');
        alertMessageforDeleteAction.should("contain", "Removed form assignment and updated template");
    }

    navigateToOverviewTab(){
        const overviewTab = cy.get('[data-test="new-careplan-template-overview-tab"]');
        overviewTab.should("exist");
        overviewTab.click();
    }

    clickonUPdateButtonBackToOverview(){
        const updateOverview = cy.get('[data-test="button-create-careplan"]');
        updateOverview.should("exsit");
        updateOverview.click();
    }
}

export default DeleteForm