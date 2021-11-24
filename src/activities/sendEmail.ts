import nodemailer from 'nodemailer';

const transportOptions = {
  "host": "192.168.123.167",
  "port": 25,
  "secure": false,
  "requireTLS": false,
}

let mailer = nodemailer.createTransport(transportOptions)

export async function sendEmail(to: string[], subject: string, text: string): Promise<void> {
  await mailer.sendMail({to, subject, text});
}