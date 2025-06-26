// pages/api/contact.ts
import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  transporter.verify((error, _) => {
    if (error) {
      console.error('SMTP connection failed:', error);
    } else {
      console.log('SMTP is ready to send emails');
    }
  });

  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method Not Allowed'});
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({error: 'Missing required fields'});
  }

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'yunjia.zheng@mail.mcgill.ca', // Your receiving email
      subject: `New message from ${name}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({message: 'Message sent successfully'});
  } catch (error: any) {
    console.error('Email send failed:', error.message);
    return res.status(500).json({error: 'Email send failed'});
  }
}
