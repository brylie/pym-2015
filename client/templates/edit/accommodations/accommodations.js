Template.accommodations.rendered = function () {

}

Template.accommodations.helpers({
    'requiresAccommodations': function () {
        /*
        * Determine if registration type requires accommodations.
        * If accommodations are required, return true.
        */

        // Get the current selected registration type
        var registrationType = registrationTypeVar.get();

        // If daily or weekly, return true, otherwise return false
        if (registrationType === 'daily' || registrationType === 'weekly') {
            return true;
        } else {
            return false;
        }
    },
    'accommodationsOptions': function () {
        /*
        * Update the accommodations options
        * based on the age group of the registrant.
        */

        // get the age group from reactive variables
        var ageGroup = ageGroupVar.get();

        // return accommodation options based on age group
        switch (ageGroup) {
            case 'child':
                return [
                    {label: "Camping", value: "camping"},
                    {label: "Dorm", value: "dorm"},
                    {label: "Semi-private", value: "semiprivate"}
                ];
            case 'youth':
                return [
                    {label: "Camping", value: "camping"},
                    {label: "Dorm", value: "dorm"},
                    {label: "Semi-private", value: "semiprivate"}
                ];
            case 'teen':
                return [
                    {label: "Camping", value: "camping"},
                    {label: "Dorm", value: "dorm"},
                    {label: "Semi-private", value: "semiprivate"}
                ];
            case 'youngAdult':
                return [
                    {label: "Camping", value: "camping"},
                    {label: "Dorm", value: "dorm"},
                    {label: "Semi-private", value: "semiprivate"}
                ];
            case 'adult':
                return [
                    {label: "Camping", value: "camping"},
                    {label: "Dorm", value: "dorm"},
                    {label: "Semi-private", value: "semiprivate"}
                ];
        }
    }
});
