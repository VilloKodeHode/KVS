import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    const secretPassword = process.env.EMAIL_PASSWORD;
    const secretEmail = process.env.EMAIL;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: secretEmail,
        pass: secretPassword,
      },
    });

    // Email content
    const mailOptions = {
      from: secretEmail,  // Use your authenticated email as the sender
      to: secretEmail,    // Send the email to yourself
      subject: "Kundehendvendelse",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
