// Half days, used for discount calculation
halfDays = ["Monday", "Saturday"];

// Early registration deadline
// May 19th, 2015 PDT (UTC - 7)
// "postmarked & paid in full on or before 5/18/2015"
// date format: 'year-month-day timezone'
earlyRegistrationDeadline =  moment("2015-05-19 -7:00", "YYYY-MM-DD Z");

// Late registration date
// June 6th, 2015 (UTC - 7)
//  "postmarked after 6/8/2015"
// date format: 'year-month-day timezone'
lateRegistrationBegins = moment("2015-06-08 -7:00", "YYYY-MM-DD Z");
