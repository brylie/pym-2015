Template.registerWizard.helpers({
  'steps': function () {
    return [
      {
        id: 'registrant',
        title: 'Registrant',
        schema: WizardSchemas.registrant,
        template: "wizardRegistrant",
        formId: "wizard-registrant"
      },
      {
        id: 'contact',
        title: 'Contact',
        schema: WizardSchemas.contact
      },
      {
        id: 'accommodations',
        title: 'Accommodations',
        schema: WizardSchemas.accommodations,
        template: "wizardAccommodations",
        formId: "wizard-accommodations"
      }
    ]
  }
});
