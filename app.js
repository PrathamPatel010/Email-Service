require('dotenv').config();

const express = require('express');
const app = express();
const {GMAIL_EMAIL,GMAIL_PASS,PORT}=require('./config/server-config');

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
    console.log({GMAIL_EMAIL,GMAIL_PASS});
});