// file to send the generated otp to the given email

// importing the required modules
import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// function for sending the otp to the email
const sendOTP = async (to, subject, text) => {
  // creating a transporter object
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // configuring the mail options
  const mailOptions = {
    from: process.env.EMAIL,
    to: to,
    subject: subject,
    text: text,
  };

  await transporter.sendMail(mailOptions);
};

// exporting the function
export default sendOTP;
