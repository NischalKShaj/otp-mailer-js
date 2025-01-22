// importing the required modules
const generateOTP = require("./otp-generator/otpGenerator.js");
const sendOTP = require("./email/sendEmail.js");

// function for creating the otp and the send that to the email
const createAndSendOTP = async (email, otpLength = 4) => {
  if (!email) {
    throw new Error("Email is required");
  }

  if (otpLength < 4 || otpLength > 6) {
    throw new Error("OTP length must be between 4 and 6");
  }

  const otp = generateOTP(otpLength);
  const subject = "Your OTP code";
  const text = `Your otp is ${otp}. Please don't share your otp with anyone.
                        Don't reply to this email. This email is auto generated.`;

  try {
    await sendOTP(email, subject, text);
    return { success: true, otp };
  } catch (error) {
    console.error(
      "Error while generating the otp and sending to the user's email",
      error
    );
    return { success: false, error };
  }
};

// exporting the main function
module.exports = createAndSendOTP;
