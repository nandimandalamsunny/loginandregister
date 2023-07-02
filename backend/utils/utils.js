
import nodemailer from 'nodemailer'

export const sendResetpasswordMail = async (name,email,token)=>{
    try {
         var transporter = nodemailer.createTransport({
         service:'gmail',
         auth:{
            user:'nandimandalamsunny2890api@gmail.com',
            pass:'yuwyuzfsfhlodavp'
         },
         tls:{
             rejectUnauthorized:false
         }
     });

     var  mailOptions={
             from: "myemail@gmail.com",
             to: email,
             subject: "Reset Password",
             html: `<p>Hiii ${name},Please copy the link  <a href="http://localhost:3000/resetpassword/${token}"  target=_blank>click here </a>  and reset your password</p> `
     }
      transporter.sendMail(mailOptions, function(error, response) {
                  if (error) {
                      console.log(error);
                      return;
                  }
                  console.log('Message sent');
                  transporter.close();
              });
    } catch (error) {
        res.status(400).send({success:false,msg:error.message})
    }
} 


