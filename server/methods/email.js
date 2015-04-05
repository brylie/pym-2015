Registrants.after.insert(function (userId, document){
    var to = document.createdByEmail,
        from = process.env.MAIL_FROM,
        name = document.first_name;

    Email.send({
        from: from,
        to: to,
        subject: "Put you subject here " + name,
        text: "Here is some text"
    });
});
