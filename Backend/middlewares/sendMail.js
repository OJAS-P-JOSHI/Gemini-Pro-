import { createTransport } from "nodemailer";

const sendMail = async (email, subject, otp) => {
  const transport = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.Gmail,
      pass: process.env.Password,
    },
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 500px;
            width: 100%;
        }
        h1 {
            color: #4CAF50;
            font-size: 26px;
            margin-bottom: 20px;
            font-weight: 700;
        }
        p {
            margin-bottom: 20px;
            color: #555;
            font-size: 16px;
            font-weight: 400;
        }
        .otp {
            font-size: 36px;
            color: #ff5722;
            margin: 20px 0;
            font-weight: 700;
        }
        .footer {
            font-size: 14px;
            color: #999;
            margin-top: 30px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>OTP Verification</h1>
        <p>Hello ${email},</p>
        <p>Thank you for registering with us. To complete your registration, please use the following One-Time Password (OTP):</p>
        <p class="otp">${otp}</p> 
        <p>This OTP is valid for the next 10 minutes. Please do not share this OTP with anyone for security reasons.</p>
        <p>If you did not request this OTP, please ignore this email or contact our support team.</p>
        <div class="footer">
            <p>Best regards,<br>OJAS P JOSHI</p>
        </div>
    </div>
</body>
</html>
`;

  await transport.sendMail({
    from: process.env.Gmail,
    to: email,
    subject,
    html,
  });
};

export default sendMail;
