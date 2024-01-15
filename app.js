require('dotenv').config();
const express = require('express');
const {PORT, GMAIL_PASS,GMAIL_EMAIL} = require('./config/server-config');
const mailsender = require('./config/email-config');
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});

app.post('/api/v1/sendmail',async(req,res)=>{
    console.log('Initiating Mail Service');
    try{
        const emailData = {
            from:GMAIL_EMAIL,
            to: process.env.RECEIVER_MAIL,
            subject: 'Check If E-mail web Service is working',
            text: "Yes, It's working. We can scale this project"
        }
        await mailsender.sendMail(emailData);
        console.log('Mail Sent Successfully!!');
        res.json({message:'Email Sent Successfully!!',data:emailData});
    } catch (err){
        console.log(err.message);
    }
})