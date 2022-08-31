const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, aboutMe, twitter, discord, address, url, email } = req.body;

    const reqData = {
      records: [
        {
          fields: {
            'Preferred Name': name,
            'About Me': aboutMe,
            Twitter: twitter,
            Discord: discord,
            'ETH Address': address,
            'Video URL': url,
            Email: email,
            Volume: 4,
          },
        },
      ],
    };

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    };

    await axios.post(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`,
      reqData,
      axiosConfig
    );

    res.status(200).send('OK');
  } catch (err) {
    res.status(err.status || 500).send(err.message || 'Internal server error');
  }
});

module.exports = router;
