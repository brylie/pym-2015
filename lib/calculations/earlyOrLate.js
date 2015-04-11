/*
Determine if a registrant qualifies for early discount or late fee
based on date of registration
return early, late, or regular depending on discount and late fee dates
*/
determineEarlyOrLate = function (date) {
    // set up registration date using moment library
    // convert date to UTC
    var registrationDate = moment(date).utc();

    // Compare registration date with early and late registration dates (in UTC)
    if (registrationDate.isBefore(earlyRegistrationDeadline.utc())) {
        // early discount
        return 'early';
    } else if (registrationDate.isAfter(lateRegistrationBegins.utc())) {
        // late fee
        return 'late';
    } else {
        // regular registration rate
        return 'regular';
    }
};
