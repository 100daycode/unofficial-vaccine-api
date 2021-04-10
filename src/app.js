// Express init
const express = require("express");
const app = express();

// local port
const port = process.env.PORT || 5000;

// Axios and cherrio
const axios = require("axios");

// baseUrl
const url = "https://cekdiri.id/vaksinasi/";

async function getData() {
  try {
    const response = await axios.get(url);

    // Data isinya array data vaksinasi
    const data = response.data.monitoring;

    // Ambil data terakhir / hari ini
    const latestData = data[data.length - 1];

    return latestData;
  } catch (error) {
    console.log(error);
  }
}

app.get("/", async (req, res) => {
  res.send({
    maintainer: "Fiqry choerudin <work.fiqrychoerudin@gmail.com>",
    source: "https://github.com/fiqryq/unofficial-vaccine-api",
    data: "https://api-vaksin.herokuapp.com/vaksin"
  });
});

app.get("/vaksin", async (req, res) => {
  res.send(await getData());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
