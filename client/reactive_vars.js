createReactiveVars = function () {
    // Set up reactive variables to temporarily hold the values of registration form fields
    // These variables are used for dynamic calculations
    ageGroupVar = new ReactiveVar;
    registrationTypeVar = new ReactiveVar;
    accommodationsVar = new ReactiveVar;
    daysVar = new ReactiveVar;
    registrationFeeVar = new ReactiveVar;
}();

resetReactiveVars = function () {
    // reset current values to undefined
    ageGroupVar.set(undefined);
    registrationTypeVar.set(undefined);
    accommodationsVar.set(undefined);
    daysVar.set(undefined);
    registrationFeeVar.set(undefined);
}

setDaysVar = function () {
    // Create placeholder days array
    var daysArray = new Array();

    // for each day
    $('input[name="days"]:checked').each(function() {
        // add day to days array
        daysArray.push(this.value);
    });

    // add days to reactive variable
    // used for price calculations
    daysVar.set(daysArray);
}

setReactiveVars = function () {
    resetReactiveVars();

    // Set the age group reactive variable
    ageGroupVar.set($('#age_group').val());

    // Set the registration type reactive variable
    registrationTypeVar.set($('#registration_type').val());

    // Set the accommodations reactive variable
    accommodationsVar.set($('#accommodations').val());

    // Set the days reactive variable
    setDaysVar();
}

setRegistrationFeeVar = function () {
//    // Set the registration object
//    // from current registration details
//    try{
//        var registration = {
//            ageGroup: ageGroupVar.get(),
//            type: registrationTypeVar.get(),
//            accommodations: accommodationsVar.get(),
//            days: daysVar.get()
//        };
//    } catch (error) {
//        console.log(error.message);
//    }
//
//    // Calculate the price
//    registrationFeeVar.set(calculateRegistrationPrice(registration));
}
