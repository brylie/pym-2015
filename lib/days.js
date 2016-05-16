// Half days, used for discount calculation
halfDays = ["Friday", "Wednesday"];

// Early registration deadline
// May 19th, 2015 PDT (UTC - 7)
// "postmarked & paid in full on or before 5/18/2015"
// date format: 'year-month-day timezone'
earlyRegistrationDeadline =  moment("2015-05-19 -7:00", "YYYY-MM-DD Z");

// Late registration date
// May 18th, 2016 (UTC - 7)
// date format: 'year-month-day timezone'
lateRegistrationBegins = moment("2016-05-18 -7:00", "YYYY-MM-DD Z");
