Meteor.methods({
    /*
    Send a confirmation email based on
        - registrant ID
    */
    'sendConfirmationEmail': function (registrantId) {
        // Get the registration document
        var registration = Registrants.findOne(registrantId);

        // If SMTP is configured, send email when registration is added
        // Check whether email sending is enabled
        var emailEnabled = process.env.ENABLE_SMTP;

        if (emailEnabled) {
            // Set up email message and send

            // Email address from registration
            var to = registration.createdByEmail;

            // From address from mail configuration
            var from = process.env.MAIL_FROM;

            // HTML message
            var html = '<p>We have received your event registration for PYM 2015.</p> \
<p>View your registration(s) by visiting: <br />\
<a href="http://register.pacificyearlymeeting.org/view">\
http://register.pacificyearlymeeting.org/view</a></p>\
<p>If you are through entering the registrations for yourself and your family, \
please write a check for at least 25% of the total for all persons \
(100% if you are claiming the early registration discount), minus \
expected assistance, payable to <strong>Pacific Yearly Meeting</strong>.</p>\
<p>Note your family email address (where you received this email), for identification.</p>\
<p>For each person under age 18, enclose either: \
<ul>\
<li><a href="http://www.pacificyearlymeeting.org/wordpress/wp-content/uploads/2015/04/2015_Childrens_Prog_Parent_Consent_and_Medical_Form.pdf">Children\'s \
program parental permission and medical release forms</a>, or</li>\
    <li><a href="http://www.pacificyearlymeeting.org/wordpress/wp-content/uploads/2015/04/2015_JYM_Parent_Permission_and_Medical.pdf">JYM program \
parental permission and medical release forms</a></li>\
</ul>\
    </p>\
<p>Mail all registration items to:</p>\
<p>Berkeley Registration Team<br />\
2151 Vine St.<br />\
Berkeley, CA., 94709</p>';

            Email.send({
                from: from,
                to: to,
                subject: "[PYM 2015] Registration success!",
                html: html
            });
        }
    }
});
