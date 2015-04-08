/*
List of all monthly meetings and worship groups
used for registrant meeting options
*/
var meetingArray = [
    "Appleseed Meeting",
    "Berkeley Meeting",
    "Big Island Meeting",
    "Central Coast Meeting",
    "Conejo Valley Worship Group",
    "Chico Meeting",
    "Claremont Monthly Meeting",
    "Davis Meeting",
    "Delta Meeting",
    "Fresno Meeting",
    "Friends House Worship Group",
    "Friends of Soledad",
    "Grass Valley Meeting",
    "Guatemala Monthly Meeting",
    "Honolulu Meeting",
    "Humboldt Meeting",
    "Inland Valley Friends Meeting",
    "Kauai Worship Group",
    "La Jolla Monthly Meeting",
    "Lake County Worship Group",
    "Las Vegas Worship Group",
    "Live Oak Monthly Meeting",
    "Livermore",
    "Marin Meeting",
    "Marloma Long Beach Monthly Meeting",
    "Maui Worship Group",
    "Mendocino Meeting",
    "Mexico City Monthly Meeting",
    "Modesto Worship Group",
    "Molokai Worship Group",
    "Monterey Peninsula Meeting",
    "Napa Sonoma Meeting",
    "Oakland Worship Group",
    "Ojai Friends Worship Group",
    "Orange Grove Monthly Meeting",
    "Palo Alto Meeting",
    "Redding Meeting",
    "Redwood Forest Meeting",
    "Reno Meeting",
    "Sacramento Meeting",
    "San Diego Monthly Meeting",
    "San Francisco Meeting",
    "San Jose Meeting",
    "Santa Barbara Monthly Meeting",
    "Santa Cruz Meeting",
    "Santa Monica Monthly Meeting",
    "Southern Humboldt Worship Group",
    "Strawberry Creek Meeting",
    "Ukiah Worship Group",
    "Visalia Meeting",
    "Whitleaf Worship Group"
];

/*
Take a string and convert it to an object in the form:
{label: string, value: string}
Used by autoform select menu
*/
var createAutoformSelectObject = function (string) {
    var autoformSelectObject = {label: string, value: string};
    return autoformSelectObject;
};

/*
Meeting options list (global variable)
created by mapping all meetings in meeting array
to objects conforming to the {label: label, value: value}
required by autoform
*/
registrantMeetingOptions = meetingArray.map(createAutoformSelectObject);
