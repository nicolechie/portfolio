var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
        user: "nicolechie.wagner@gmail.com",
        pass: "taBasco!5"
     }
});

// verify connection configuration
transporter.verify(function(error, success) {
   if (error) {
        console.log(error);
   } else {
        console.log('Server is ready to take our messages');
   }
});

module.exports = function(app) {
    var bodyParser = require('body-parser');
    var jsonParser = bodyParser.json();
    
app.post('/contact-form', jsonParser, function(req, res) {
        if (!req.body) {
            return res.status(400).json({
                message: "No request body"
            });
        }
        
        console.log(req.body);
        
        var data = req.body;
 
        transporter.sendMail({
            from: data.contactEmail,
            to: 'nicolechie.wagner@gmail.com',
            subject: 'Message from ' + data.contactName,
            text: data.contactMsg
        });
     
        res.json(data);
    });
};