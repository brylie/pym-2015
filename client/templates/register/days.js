Template.days.created = function (){
    // trying to reset days selection when template changes
    // for some reason this is not working

    // cycle through each day
    $('input[name="days"]').each(function() {
        // make sure day is not checked
        this.checked = false;
    });
};

Template.days.events({
    'click input': function(event) {
        // create an array for days
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
});
