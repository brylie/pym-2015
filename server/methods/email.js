Registrants.after.insert(function (userId, document) {
    var to = document.createdByEmail,
        from = process.env.MAIL_FROM,
        name = document.first_name,
        html = 'We have received your event registration for PYM 2015. <br /> \
                        View your registration(s) by visiting: <br /> \
                        <a href="http://register.pacificyearlymeeting.org/view">\
                        http://register.pacificyearlymeeting.org/view</a>';

    Email.send({
        from: from,
        to: to,
        subject: "[PYM 2015] Registration success!",
        html: html
    });
});
