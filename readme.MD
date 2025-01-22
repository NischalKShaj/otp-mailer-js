# otp-mailer-js

A simple JavaScript library for sending OTPs via email.

## Overview

This library provides a simple way to send One-Time Passwords (OTPs) via email. It uses the `nodemailer` library to send emails and generates OTPs using a cryptographically secure pseudo -random number generator.

## Tech Stack

- Node. JS
- Javascript
- nodemailer
- jest

## Installation

```npm install otp-mailer-js```

## Usage

after installation of the package import the package and pass the email and the otp's length

```const otpmailerjs = require("otp-mailer-js")```

```const generateOTP = otpmailer(email, otp_length)```
