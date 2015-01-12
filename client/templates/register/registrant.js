Template.registrantDetails.helpers({
    ageGroupOptions: function () {
        return [
            {label: "Child (0-5)", value: "child"},
            {label: "Youth (6-12)", value: "youth"},
            {label: "Teen (13-17)", value: "teen"},
            {label: "Young Friend (18-25)", value: "youngAdult"},
            {label: "Adult (26+)", value: "adult"}
        ];
    },
    registrationTypeOptions: function () {
        return [
            {label: "Commuter", value: "commuter"},
            {label: "Daily", value: "daily"},
            {label: "Full Week", value: "weekly"}
        ];
    }
});

Template.registrantDetails.events({
    'change #registration_type': function () {
        // trying to reset days selection when template changes
        // for some reason this is not working, or is it?
        resetReactiveVars();
        $("#accommodations").val("");

        // cycle through each day
        $('input[name="days"]').each(function() {
            // make sure day is not checked
            this.checked = false;
        });
    },
    'change #age_group': function () {
        console.log("Age group changed.");
        $("#accommodations").val("");
//        registrationFeeVar.set();
//        resetReactiveVars();
//        setReactiveVars();
//        setRegistrationFeeVar();
    }
});
