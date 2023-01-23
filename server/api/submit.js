const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, aboutMe, twitter, discord, address, url, email } = req.body;
    const date = new Date().toLocaleDateString();
    const volume = 7;

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
          database_id: process.env.NOTION_SUBMIT_ID,
        },
        properties: {
          'Preferred Name': { title: [{ text: { content: name } }] },
          'About Me': {
            rich_text: [{ text: { content: aboutMe } }],
          },
          Twitter: {
            rich_text: [{ text: { content: twitter } }],
          },
          Discord: {
            rich_text: [{ text: { content: discord } }],
          },
          'ETH Address': {
            rich_text: [{ text: { content: address } }],
          },
          'Video URL': { url: url },
          Email: { email: email },
          Volume: { number: volume },
          Date: {
            rich_text: [{ text: { content: date } }],
          },
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
