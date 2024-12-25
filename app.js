const express = require("express");
const bodyparser = require("body-parser")
const nodemailer = require("nodemailer")
const path = require("path")
const app = express()
const port = 3000
// Define the path for static assets
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/lib', express.static(path.join(__dirname, 'lib')));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/js', express.static(path.join(__dirname, 'js')));

//taking input from html file
app.use(bodyparser.urlencoded({ extended: true }));

// app.use(express.static("style"))
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"))
    console.log(__dirname)
})
app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname + "/AboutUs.html"))
    console.log("Attached")
})

app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname + "/contact.html"))
    console.log("Attached")
})
app.get("/training", function (req, res) {
    res.sendFile(path.join(__dirname + "/Training.html"))
    console.log("Attached")
})
// app.get("/submission", function (req, res) {
//     res.sendFile(path.join(__dirname + "/Submission.html"))
//     console.log("Attached")
// })
app.get("/services", function (req, res) {
    res.sendFile(path.join(__dirname + "/services.html"))
    console.log("Attached")
})
app.get("/blog", function (req, res) {
    res.sendFile(path.join(__dirname + "/blog.html"))
    console.log("Attached")
})
app.get("/event", function (req, res) {
    res.sendFile(path.join(__dirname + "/EventPage.html"))
    console.log("Attached")
})
app.get("/submitted", function (req, res) {
    res.sendFile(path.join(__dirname + "/submit9.html"))
    console.log("Attached")
})
app.post("/contact", function (req, res) {
    const na = req.body.name;
    const em = req.body.email;
    const ph = req.body.phone;
    const pj = req.body.project;
    const mes = req.body.message;
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "info@kubotor.com",
            pass: "xwmk uyuk qqvw bgup",


        }
    })
    var mailOptions = {
        from: "info@kubotor.com",
        to: "info@kubotor.com",
        subject: "Response Message from  " + na,
        html: "Name :" + na + "<br/>" +
            "Mail :" + em + "<br/>" +
            "Phone Number :" + ph + "<br/>" +
            "Project :" + pj + "<br/>" +
            "Message :" + mes
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json({ success: false, message: "Something went wrong. Please try again." });
        } else {
            // console.log("Mail sent: " + info.response);

            // res.json({ success: true, message: "Mail submitted successfully!" });
            res.redirect("/submitted")
        }
    })
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 
