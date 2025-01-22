// file to send the generated otp to the given email

// importing the required modules
const createTransport = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

// function for sending the otp to the email
const sendOTP = async (to, subject, text) => {
  // creating a transporter object
  const transporter = createTransport.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL || "nischalkshaj5@gmail.com",
      pass: process.env.PASSWORD || "aplv gfvz gqdd tyjy",
    },
  });

  console.log("email", process.env.EMAIL);
  console.log("password", process.env.PASSWORD);

  // configuring the mail options
  const mailOptions = {
    from: process.env.EMAIL,
    to: to,
    subject: subject,
    text: text,
  };

  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("error from the transporter", err);
    } else {
      console.log("info", info);
    }
  });
};

// exporting the function
module.exports = sendOTP;
