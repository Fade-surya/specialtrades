import nodemailer from 'nodemailer';

interface OrderEmailData {
  to: string;
  orderNumber: string;
  username: string;
  email: string;
  server: string;
  message: string;
}

export async function sendOrderEmail(data: OrderEmailData) {
  try {
    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'assooryamsu80@gmail.com', // Same as recipient for this use case
        pass: process.env.EMAIL_PASSWORD || '',
      },
    });

    // Format the email message
    const emailContent = `
      <h1>New Minecraft Trade Order</h1>
      <p><strong>Order Number:</strong> ${data.orderNumber}</p>
      <p><strong>Customer:</strong> ${data.username}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Server:</strong> ${data.server}</p>
      <p><strong>Message:</strong> ${data.message}</p>
      <hr>
      <h2>Trade Details</h2>
      <p>Customer will provide: 1 Netherite Ingot</p>
      <p>Customer will receive: 1 Netherite Sword</p>
      <hr>
      <p>Please contact the customer within 24 hours to arrange the trade.</p>
    `;

    // Send the email
    const mailOptions = {
      from: 'Netherite Trade <noreply@netherite-trade.com>',
      to: data.to,
      subject: `New Trade Order: ${data.orderNumber}`,
      html: emailContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    // Don't fail the order if email fails
    return false;
  }
}
