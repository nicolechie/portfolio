var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

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
            to: 'nicolechie@mac.com',
            subject: 'Message from ' + data.contactName,
            text: data.contactMsg
        });
     
        res.json(data);
    });
};