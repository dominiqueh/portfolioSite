// =+==+==+==+==+==+==+==+==+==+==+==+==
// Requires
//  =+==+==+==+==+==+==+==+==+==+==+==+==
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    cors = require('cors'),
    path = require('path'),
    port = process.env.PORT || 80,
    mongoose = require('mongoose'),
//     var helper = require('sendgrid').mail
  
// from_email = new helper.Email("test@example.com")
// to_email = new helper.Email("test@example.com")
// subject = "Sending with SendGrid is Fun"
// content = new helper.Content("text/plain", "and easy to do anywhere, even with Node.js")
// mail = new helper.Mail(from_email, subject, to_email, content)

// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
// var request = sg.emptyRequest({
//   method: 'POST',
//   path: '/v3/mail/send',
//   body: mail.toJSON()
// });

// sg.API(request, function(error, response) {
//   console.log(response.statusCode)
//   console.log(response.body)
//   console.log(response.headers)
// })

var sampleModel = require('./models/sampleSchema.js')
var SampeSchema = sampleModel.SampeSchema
var Sample = sampleModel.Sample

//  =+==+==+==+==+==+==+==+==+==+==+==+==
// Application Configuration
//  =+==+==+==+==+==+==+==+==+==+==+==+==
mongoose.connect('mongodb://localhost/DominiqueDB', function(err) {
    console.log('connected to THE MONGODS')
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())
app.use(express.static(path.join(__dirname, './public')))


//  =+==+==+==+==+==+==+==+==+==+==+==+==
// Gets and Posts
//  =+==+==+==+==+==+==+==+==+==+==+==+==

// app.get("/", function(req, res) {
//     res.sendFile('/index.html', {
//         root: "../public/index.html"
//     })
// })

// SENDGRID
// app.post("/sendMessage", function (req, res) {
// 	var payload = req.body;
// 	payload.to = "dominiquehorner@gmail.com"
// 	sendgrid.send(payload,function (err,json) {
// 		if (err) {
// 			return res.send("FAIL")
// 		} else {
// 			res.send("SUCCESS!!!")
// 		}
// 	})
// })

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
var helper = require('sendgrid').mail
  
from_email = new helper.Email("test@example.com")
to_email = new helper.Email("test@example.com")
subject = "Sending with SendGrid is Fun"
content = new helper.Content("text/plain", "and easy to do anywhere, even with Node.js")
mail = new helper.Mail(from_email, subject, to_email, content)

var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
});

sg.API(request, function(error, response) {
  console.log(response.statusCode)
  console.log(response.body)
  console.log(response.headers)
})

// =+==+==+==+==+==+==+==+==+==+==+==+==
// Creating Server and Listening for Connections
// =+==+==+==+==+==+==+==+==+==+==+==+==
app.listen(port, function() {
    console.log('Server running on port ' + port)
})
