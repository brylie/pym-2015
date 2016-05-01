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
      // Return an array of accommodations options objects
      return [
          {label: "Camping", value: "camping"},
          {label: "Dorm", value: "dorm"},
          {label: "Semi-private", value: "semiprivate"}
      ];
    }
});
