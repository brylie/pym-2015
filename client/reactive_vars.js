createReactiveVars = function () {
    // Set up reactive variables to temporarily hold the values of registration form fields
    // These variables are used for dynamic calculations
    ageGroupVar = new ReactiveVar;
    registrationTypeVar = new ReactiveVar;
    accommodationsVar = new ReactiveVar;
    daysVar = new ReactiveVar;
    registrationFeeVar = new ReactiveVar;
    linensVar = new ReactiveVar;
    carbonTaxVar = new ReactiveVar;
    donationVar = new ReactiveVar;
}();

resetReactiveVars = function () {
    // reset current values to undefined
    ageGroupVar.set(undefined);
    registrationTypeVar.set(undefined);
    accommodationsVar.set(undefined);
    daysVar.set(undefined);
    registrationFeeVar.set(undefined);
    linensVar.set(undefined);
    carbonTaxVar.set(undefined);
    donationVar.set(undefined);
};

setDaysVar = function () {
    /*
    Save selected days as a reactive variable
    for fee calculation, etc
    */

    // Create placeholder days array
    var daysArray = new Array();

    // get a list of all selected days
    $('input[name="days"]:checked').each(function() {
        daysArray.push(this.value);
    });

    // add days to reactive variable
    // used for price calculations
    daysVar.set(daysArray);
};

setAgeGroupVar = function () {
    /*
     Set the age group reactive variable
     calculated based on the value of the age field
     making sure value of age is not not empty string
    */
    var age = $("#age").val();

    // Make sure age has been set
    if (age !== '') {
        var ageGroup = calculateAgeGroup(age);
        ageGroupVar.set(ageGroup);
    };
};

setCarbonTaxVar = function () {
    // Get the value of the carbon tax input
    var carbonTaxInputValue = $('#carbon-tax').val();

    // If the value is not empty
    if (carbonTaxInputValue !== "") {
        // Set the carbon tax reactive variable to the form input value
        carbonTaxVar.set(parseInt(carbonTaxInputValue));
    }
};

setDonationVar = function () {
    // Get the value of the donation input
    var donationInputValue = $('#donation').val();

    // If the value is not empty
    if (donationInputValue !== "") {
        // Set the donation reactive variable to the form input value
        donationVar.set(parseInt(donationInputValue));
    }
};

setReactiveVars = function () {
    // Reset all reactive variables to undefined
    resetReactiveVars();

    // Set the age group reactive variable
    setAgeGroupVar();

    // Set the registration type reactive variable
    registrationTypeVar.set($('#registration_type').val());

    // Set the accommodations reactive variable
    accommodationsVar.set($('#accommodations').val());

    // Set the days reactive variable
    setDaysVar();

    // Set linens reactive var
    var linensChecked = $('#linens').is(':checked');
    linensVar.set(linensChecked);

    // Set the carbon tax reactive variable
    setCarbonTaxVar();

    // Set the donation reactive variable
    setDonationVar();

}

setRegistrationFeeVar = function () {
    // Create this function if necessary
    // e.g. if calculating financial aid, donations, etc
}
