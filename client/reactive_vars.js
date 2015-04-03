createReactiveVars = function () {
    // Set up reactive variables to temporarily hold the values of registration form fields
    // These variables are used for dynamic calculations
    ageGroupVar = new ReactiveVar;
    registrationTypeVar = new ReactiveVar;
    accommodationsVar = new ReactiveVar;
    daysVar = new ReactiveVar;
    registrationFeeVar = new ReactiveVar;
    firstTimeAttenderVar = new ReactiveVar;
    linensVar = new ReactiveVar;
}();

resetReactiveVars = function () {
    // reset current values to undefined
    ageGroupVar.set(undefined);
    registrationTypeVar.set(undefined);
    accommodationsVar.set(undefined);
    daysVar.set(undefined);
    registrationFeeVar.set(undefined);
    linensVar.set(undefined);
}

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
}

setReactiveVars = function () {
    resetReactiveVars();

    // Set the age group reactive variable
    // calculated based on the value of the age field
    var age = $("#age").val();
    var ageGroup = calculateAgeGroup(age);
    ageGroupVar.set(ageGroup);

    // Set the registration type reactive variable
    registrationTypeVar.set($('#registration_type').val());

    // Set the accommodations reactive variable
    accommodationsVar.set($('#accommodations').val());

    // Set the days reactive variable
    setDaysVar();

    // Set first time attender reactive variable
    var firstTimeAttenderChecked = $('#first-time-attender').is(':checked');
    firstTimeAttenderVar.set(firstTimeAttenderChecked);

    // Set linens reactive var
    var linensChecked = $('#linens').is(':checked');
    linensVar.set(linensChecked);
}

setRegistrationFeeVar = function () {
    // Create this function if necessary
    // e.g. if calculating financial aid, donations, etc
}
