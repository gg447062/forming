const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email } = req.body;

    const reqData = {
      records: [
        {
          fields: {
            Email: email,
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
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_RSVP_ID}`,
      reqData,
      axiosConfig
    );

    res.status(200).send('OK');
  } catch (error) {
    res.status(err.status || 500).send(err.message || 'Internal server error');
  }
});

module.exports = router;
