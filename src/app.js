const express = require("express");
const path = require("path");

const PORT = 4000;
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "..", "public")));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
