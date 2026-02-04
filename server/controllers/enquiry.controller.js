const transporter = require("../utils/mailer");

exports.sendEnquiryMail = async (req, res) => {
     console.log("🔥 Enquiry API HIT");
  console.log(req.body);
  try {
    const {
      tourName,
      tourId,
      name,
      phone,
      email,
      startDate,
      numberOfDays,
      numberOfAdults,
      numberOfChildren,
      query,
    } = req.body;

    const mailOptions = {
      from: `"Tour Enquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Tour Enquiry - ${tourName}`,
      html: `
        <h2>New Tour Enquiry</h2>
        <p><b>Tour Name:</b> ${tourName}</p>
        <p><b>Tour ID:</b> ${tourId}</p>
        <hr/>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Start Date:</b> ${startDate}</p>
        <p><b>Number of Days:</b> ${numberOfDays}</p>
        <p><b>Adults:</b> ${numberOfAdults}</p>
        <p><b>Children:</b> ${numberOfChildren}</p>
        <p><b>Query:</b> ${query || "N/A"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Enquiry sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send enquiry" });
  }
};
