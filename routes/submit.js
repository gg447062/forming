const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const reqData = {
      records: [
        {
          fields: {
            'Preferred Name': 'Wabos',
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

    const { data } = await axios.post(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`,
      reqData,
      axiosConfig
    );

    console.log(data);
    res.status(200).send('ok');
  } catch (error) {
    res.status(401).json({ error });
  }
  // res.send('all set');
});

module.exports = router;
