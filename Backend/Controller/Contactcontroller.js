const transporter = require("../Config/Nodemailer.js");

exports.AdmincontactUs = async (req, res) => {
    const { firstname, lastname, contactno, email, companyname, citystate, subject, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Contact Form: ${subject}`,
        html: `
            <h2>New Contact Form Message</h2>

            <p><b>First Name:</b> ${firstname}</p>
            <p><b>Last Name:</b> ${lastname}</p>
            <p><b>Contact NO:</b> ${contactno}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Company Name:</b> ${companyname}</p>
            <p><b>City & State:</b> ${citystate}</p>
            <p><b>Message:</b> ${message}</p>  `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({message: "Email sent successfully"});
};

exports.UsercontactUs = async (req, res) => {
    const { firstname, lastname, phoneno, email, citystate, gender, subject, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Contact Form: ${subject}`,
        html: `
            <h2>New Contact Form Message</h2>

            <p><b>First Name:</b> ${firstname}</p>
            <p><b>Last Name:</b> ${lastname}</p>
            <p><b>Phone NO:</b> ${phoneno}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>City & State:</b> ${citystate}</p>
            <p><b>Gender:</b> ${gender}</p>
            <p><b>Message:</b> ${message}</p> `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({message: "Email sent successfully"});
};

