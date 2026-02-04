const express = require("express");
const cors = require("cors");
require("dotenv").config();

const enquiryRoutes = require("./routes/enquiry.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", enquiryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
