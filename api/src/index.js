const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use("/files", routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
