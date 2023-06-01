import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";
 
export async function POST(req) {
 try {
   const { email , subject , message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json({ success: false, message: "Please fill in all required fields" });
    }
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      secure: true,
    })
    const mailData = {
      from: email ,
      to: process.env.EMAIL,
      subject: subject,
      text: message,
      html: `<div>${message}</div><h2>Sent from:
      ${email}</h2>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
   return NextResponse.json({success  : true , msg : "Message Send succesfully"});
} catch (error) {
     return NextResponse.json({ success : false , msg : "internal Server error"});
    
 }
}