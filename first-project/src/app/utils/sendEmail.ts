import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'nafisahamed200429@gmail.com',
      pass: 'oftd qxwz hvad oygp',
    },
  });

  await transporter.sendMail({
    from: 'nafisahamed200429@gmail.com', // sender address
    to,
    subject: 'Reset your password within ten mins!', // Subject line
    text: 'how are you', // plain text body
    html, // html body
  });
};

// on two step verification

// app password search in this app

// smtp


