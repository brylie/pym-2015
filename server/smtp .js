// Copy the following settings into a file named smtp.js
// Configure settings as needed

Meteor.startup(function() {
    var username = "postmaster@mg.pacificyearlymeeting.org";
    var password = "7d664665b2af90e0e992c18620b56238";
    var server = "smtp.mailgun.org";
    var port = "587"


    // Set ENABLE SMTP to true once SMTP settings are correct
    process.env.ENABLE_SMTP = true;

   // Set the from address for registration emails
   process.env.MAIL_FROM = 'registrar@pacificyearlymeeting.org';

   // URL related to SMTP
   process.env.MAIL_URL = 'smtp://' + encodeURIComponent(username) + ':' + encodeURIComponent(password) + '@' + encodeURIComponent(server) + ':' + port;
});
