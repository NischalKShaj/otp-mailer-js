// file to test the developed package

// importing the required modules'
const createAndSendOTP = require("../src/app.js");
const generateOTP = require("../src/otp-generator/otpGenerator.js");
const sendOTP = require("../src/email/sendEmail.js");

// Mocking the dependencies
jest.mock("../src/otp-generator/otpGenerator.js");
jest.mock("../src/email/sendEmail.js");

describe("createAndSendOTP", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it("should throw an error if email is not provided", async () => {
    await expect(createAndSendOTP(null)).rejects.toThrow("Email is required");
  });

  it("should throw an error if OTP length is less than 4 or greater than 6", async () => {
    await expect(createAndSendOTP("test@example.com", 3)).rejects.toThrow(
      "OTP length must be between 4 and 6"
    );
    await expect(createAndSendOTP("test@example.com", 7)).rejects.toThrow(
      "OTP length must be between 4 and 6"
    );
  });

  it("should successfully generate and send an OTP", async () => {
    const mockOTP = "1234";
    generateOTP.mockReturnValue(mockOTP); // Mock OTP generation
    sendOTP.mockResolvedValue(); // Mock successful email sending

    const result = await createAndSendOTP("test@example.com", 4);

    expect(result).toEqual({ success: true, otp: mockOTP });
    expect(generateOTP).toHaveBeenCalledWith(4);
    expect(sendOTP).toHaveBeenCalledWith(
      "test@example.com",
      "Your OTP code",
      `Your otp is ${mockOTP}. Please don't share your otp with anyone.
                        Don't reply to this email. This email is auto generated.`
    );
  });

  it("should handle errors during email sending", async () => {
    const mockError = new Error("SMTP Error");
    generateOTP.mockReturnValue("1234");
    sendOTP.mockRejectedValue(mockError); // Mock email sending failure

    const result = await createAndSendOTP("test@example.com", 4);

    expect(result).toEqual({ success: false, error: mockError });
    expect(generateOTP).toHaveBeenCalledWith(4);
    expect(sendOTP).toHaveBeenCalled();
  });
});
