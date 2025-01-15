//  file to generate the OTP for the application

// importing the required modules
import crypto from  ("crypto");

// function for creating the opt
const generateOTP = (length = 4)=>{
  const digits = "0123456789";
  const otp = "";
  for(let i=0;i<length;i++){
    const randomIndex= crypto.randomInt(0,digits.length)
    otp += digits[randomIndex];
  }
  return otp
}

// exporting the function
export default generateOTP;
