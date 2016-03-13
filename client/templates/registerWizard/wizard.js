Template.registerWizard.helpers({
  'steps': function () {
    return [
      {
        id: 'registrant',
        title: 'Registrant',
        schema: WizardSchemas.registrant
      },
      {
        id: 'contact',
        title: 'Contact',
        schema: WizardSchemas.contact
      }
    ]
  }
});
