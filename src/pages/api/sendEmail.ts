import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { to, subject, text } = req.body;
    // Create a transporter
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.NODEMAILER_EMAIL, // Your email
        pass: process.env.NODEMAILER_PASS, // Your email password
      },
      secure: true,
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: process.env.NODEMAILER_EMAIL, // Sender address
        to: process.env.NODEMAILER_EMAIL, // List of receivers
        subject, // Subject line
        text: `${text}\n from: ${to}`, // Plain text body
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
