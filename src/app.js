//  main file for generating the otp and sending the otp to the user's email

// importing the required modules
import generateOTP from "./otp-generator/otpGenerator";
import sendOTP from "./email/sendEmail";

// function for creating the otp and the send that to the email
const createAndSendOTP = async (email, otpLength = 4) => {
  const otp = generateOTP(otpLength);
  const subject = "Your OTP code";
  const text = `Your otp is ${otp}. Please don't share you otp with anyone.
                        Don't reply to this email. This email is auto generated.`;
  try {
    await sendOTP(email, subject, text);
    return { success: true, otp };
  } catch (error) {
    console.error(
      "error while generating the otp and sending to the user's email",
      error
    );
    return { success: false, error };
  }
};

// exporting the main function
export default createAndSendOTP;
