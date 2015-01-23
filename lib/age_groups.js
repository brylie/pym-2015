calculateAgeGroup = function (age) {
    /*
    * Calculate the age group
    * based on an age input
    * return the age group string
    * 0-5: child
    * 6-10: youth
    * 11-17: teen
    * 18-25: yaf
    * 26+: adult
    */

    // Make sure age is an integer
    try {
        parseInt(age);
    }
    catch (error) {
        console.log(error.message);
        return;
    }

    // determine the age group as described above
    if (age >= 0 && age <= 5) {
        return 'child';
    } else if (age >= 6 && age <= 10) {
        return 'youth';
    } else if (age >= 11 && age <= 17) {
        return 'teen';
    } else if (age >= 18 && age <= 25) {
        return 'youngAdult';
    } else if (age >= 26 ) {
        return 'adult';
    } else {
        return undefined;
    }
};
