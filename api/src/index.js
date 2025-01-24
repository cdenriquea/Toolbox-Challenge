const express = require("express"); // Use CommonJS require
const cors = require("cors");
const routes = require("./routes"); // Ensure routes.js is also CommonJS

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/files", routes);

// Default route for testing
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

// Start the server only if not in test mode
if (process.env.NODE_ENV !== "test") {
  const PORT = 3000;
  app.listen(PORT, () =>
    console.log(`API running on http://localhost:${PORT}`)
  );
}

// Export the app for testing
module.exports = app;
