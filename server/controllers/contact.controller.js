const transporter = require("../utils/mailer");

exports.sendContactMail = async (req, res) => {
  console.log("🔥 Contact API HIT");
  console.log(req.body);

  try {
    const {
      name,
      phone,
      email,
      startDate,
      days,
      adults,
      children,
      category,
      tourName,
      message,
    } = req.body;

    // Basic validation
    if (!name || !phone || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `📩 New Contact Enquiry from ${name}`,
      html: `
        <h2>New Contact Form Enquiry</h2>
        <hr />

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr />

        <p><strong>Category:</strong> ${category || "Not selected"}</p>
        <p><strong>Tour Name:</strong> ${tourName || "Not selected"}</p>
        <p><strong>Start Date:</strong> ${startDate || "N/A"}</p>
        <p><strong>Number of Days:</strong> ${days || "N/A"}</p>
        <p><strong>Adults:</strong> ${adults || "N/A"}</p>
        <p><strong>Children:</strong> ${children || "N/A"}</p>

        <hr />

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("❌ Contact mail error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};
