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
                    {label: "Semi-private", value: "semiprivate"},
                    {label: "Private", value: "private"}
                ];
            case 'youth':
                return [
                    {label: "Camping", value: "camping"},
                    {label: "Semi-private", value: "semiprivate"},
                    {label: "Private", value: "private"},
                    {label: "Junior Yearly Meeting", value: "jym"}
                ];
            case 'teen':
                return [
                    {label: "Camping", value: "camping"},
                    {label: "Semi-private", value: "semiprivate"},
                    {label: "Private", value: "private"},
                    {label: "Junior Yearly Meeting", value: "jym"},
                    {label: "Young Adult Friends", value: "yaf"}
                ];
            case 'youngAdult':
                return [
                    {label: "Camping", value: "camping"},
                    {label: "Semi-private", value: "semiprivate"},
                    {label: "Private", value: "private"},
                    {label: "Junior Yearly Meeting", value: "jym"},
                    {label: "Young Adult Friends", value: "yaf"}
                ];
            case 'adult':
                return [
                    {label: "Camping", value: "camping"},
                    {label: "Semi-private", value: "semiprivate"},
                    {label: "Private", value: "private"},
                    {label: "Young Adult Friends", value: "yaf"}
                ];
        }
    }
});
