const nodemailer = require('nodemailer');

async function test() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'radivcodingacademy@gmail.com',
      pass: 'nljpylpkdhocliay',
    },
  });

  try {
    const info = await transporter.sendMail({
      from: 'radivcodingacademy@gmail.com',
      to: 'radivcodingacademy@gmail.com',
      subject: 'Test Email from Node Script',
      text: 'This is a test to verify credentials.',
    });
    console.log('Success!', info.messageId);
  } catch (error) {
    console.error('Failed:', error);
  }
}

test();
