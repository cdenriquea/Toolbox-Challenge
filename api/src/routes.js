const express = require("express");
const axios = require("axios");
const router = express.Router();

const API_KEY = "Bearer aSuperSecretKey";
const BASE_URL = "https://echo-serv.tbxnet.com/v1/secret";

router.get("/data", async (req, res) => {
  try {
    const {
      data: { files },
    } = await axios.get(`${BASE_URL}/files`, {
      headers: { Authorization: API_KEY },
    });

    const fileData = await Promise.all(
      files.map(async (file) => {
        try {
          const { data } = await axios.get(`${BASE_URL}/file/${file}`, {
            headers: { Authorization: API_KEY },
          });

          const lines = data
            .split("\n")
            .slice(1)
            .map((line) => {
              const [file, text, number, hex] = line.split(",");

              if (!file || !text || !number || !hex) return null;
              return { text, number: parseInt(number, 10), hex };
            })
            .filter(Boolean);

          return { file, lines };
        } catch {
          return null;
        }
      })
    );

    res.json(fileData.filter(Boolean));
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
