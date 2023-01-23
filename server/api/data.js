const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const database_id = process.env.NOTION_DATA_ID;

    const options = {
      method: 'POST',
      url: `https://api.notion.com/v1/databases/${database_id}/query`,
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      data: {
        page_size: 100,
      },
    };

    const response = await axios.request(options);
    const resData = response.data.results[0].properties;

    res.status(200).send(resData);
  } catch (err) {
    console.error(err);
    res.status(err.status || 500).send(err.message || 'Internal server error');
  }
});

module.exports = router;
