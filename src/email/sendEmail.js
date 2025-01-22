// file to send the generated otp to the given email

// importing the required modules
const createTransport = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

// for limiting the call for generating the otp
const requestCounts = new Map();

// setting up the rate limit
const rate_limit = 2; //max request
const window_size = 60 * 1000; // max request per second

// function for rate limiting
const isRateLimited = (email) => {
  const currentTime = Date.now();
  const userRequests = requestCounts.get(email) || [];

  // Remove requests that are outside the time window
  const validRequests = userRequests.filter(
    (requestTime) => currentTime - requestTime < window_size
  );

  // If the number of valid requests is greater than the limit, block the request
  if (validRequests.length >= rate_limit) {
    return true; // Rate limit exceeded
  }

  // Otherwise, log the new request and allow it
  validRequests.push(currentTime);
  requestCounts.set(email, validRequests);
  return false; // Request allowed
};

// function for sending the otp to the email
const sendOTP = async (to, subject, text) => {
  // rate limit checking
  if (isRateLimited(to)) {
    return { error: "Too many requests. Please try again later." };
  }
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
    from: process.env.EMAIL || "nischalkshaj5@gmail.com",
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
