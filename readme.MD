# OTP Mailer JS

A simple JavaScript library for generating and sending One-Time Passwords (OTPs) via email. It leverages the `nodemailer` library for sending emails and uses a cryptographically secure pseudo-random number generator to generate OTPs.

## Overview

`otp-mailer-js` allows you to quickly integrate OTP functionality into your application. It is designed to be easy to use, secure, and effective for use cases such as login or signup verification. The OTPs are sent to a specified email address and can be customized for different lengths.

## Tech Stack

- **Node.js**
- **JavaScript**
- **Nodemailer** (for sending emails)
- **Jest** (for testing)

## Features

- Generate and send OTPs to an email address
- Customizable OTP length
- Secure random OTP generation
- Easy-to-use API
- Built with Nodemailer for email delivery

## Installation

To install the `otp-mailer-js` package, you can use npm:

```bash
npm install otp-mailer-js
```

## Usage

After installing the package, you can use it to generate and send OTPs to a specified email address. Here's an example usage:

### Import the Package

```javascript
const otpmailer = require('otp-mailer-js');
```

### Generate and Send OTP

```javascript
const email = 'recipient-email@example.com'; // The recipient's email address
const otp_length = 6; // The desired OTP length

otpmailer(email, otp_length)
  .then(response => {
    console.log('OTP sent successfully:', response);
  })
  .catch(error => {
    console.error('Error sending OTP:', error);
  });
```

### In the above example

email: The recipient's email address to which the OTP will be sent.

otp_length: The desired length of the OTP (e.g., 6 digits, 8 characters, etc.).

The otp-mailer-js function generates the OTP and sends it via email.

### Example Email Content

The generated OTP will be sent in a simple text-based email, similar to the following:

Subject: Your OTP Code

Body: Your One-Time Password (OTP) is: 123456

## Testing

This package is tested using Jest. You can run the tests by using the following command:

```bash
npm test
```

## Contribution

Feel free to open issues, fork the repository, or submit pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contact

For any questions or support, feel free to reach out via GitHub issues or at [nischalkshaj5@gmail.com](mailto:nischalkshaj5@gmail.com).
