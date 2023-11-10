import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = 5600;

app.use(cors());

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'onlyforgamesdc@gmail.com',
        pass: 'dzzlnkazphkkpnwk'
    }
});

app.post('/send-email', (req, res) => {
    const { otp, email } = req.body;

    console.log(`Received OTP: ${otp}`);
    console.log(`Received Email: ${email}`);

    const mailOptions = {
        from: 'onlyforgamesdc@gmail.com',
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP is: ${otp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});
