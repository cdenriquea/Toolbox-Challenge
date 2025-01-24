const express = require("express");
const axios = require("axios");
const router = express.Router();

const API_KEY = "Bearer aSuperSecretKey";
const BASE_URL = "https://echo-serv.tbxnet.com/v1/secret";

// Endpoint por default
router.get("/", (req, res) => {
  res.json({
    message: "Files API is working. Use /files/data to fetch file data.",
  });
});

// Endpoint para obtener la lista de archivos
router.get("/list", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/files`, {
      headers: { Authorization: API_KEY },
    });
    res.status(200).json(response.data.files); // Enviar lista de archivos
  } catch (error) {
    console.error("Error fetching files list:", error.message);
    res.status(500).json({ error: "Failed to fetch files list" });
  }
});

// Endpoint para procesar los archivos
router.get("/data", async (req, res) => {
  try {
    const { fileName } = req.query; // Read the fileName query parameter
    const {
      data: { files },
    } = await axios.get(`${BASE_URL}/files`, {
      headers: { Authorization: API_KEY },
    });

    // Filter the files to process if fileName is provided
    const filesToProcess = fileName ? [fileName] : files;

    const fileData = await Promise.all(
      filesToProcess.map(async (file) => {
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
