const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email, address, twitter, profile } = req.body;
    const date = new Date().toISOString();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const options = {
      method: 'POST',
      url: 'https://api.notion.com/v1/pages/',
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      data: {
        parent: {
          type: 'database_id',
          database_id: process.env.NOTION_RSVP_ID,
        },
        properties: {
          Address: { title: [{ text: { content: address } }] },
          Date: {
            date: { start: date, time_zone: tz },
          },
          Twitter: {
            rich_text: [{ text: { content: twitter } }],
          },
          Email: { email: email },
          'Emanate Profile': { url: profile == '' ? null : profile },
        },
      },
    };

    await axios.request(options);

    res.status(200).send('OK');
  } catch (err) {
    console.error(err);
    res.status(err.status || 500).send(err.message || 'Internal server error');
  }
});

module.exports = router;
