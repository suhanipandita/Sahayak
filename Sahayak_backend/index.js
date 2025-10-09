require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

// Existing /translate endpoint
app.post('/translate', async (req, res) => {
  const { text, targetLang } = req.body;
  const apiKey = process.env.GOOGLE_API_KEY;
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  if (!text || !targetLang) {
    return res.status(400).json({ error: 'Missing text or targetLang in request body' });
  }

  try {
    const response = await axios.post(url, {
      q: text,
      target: targetLang,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Translation error:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to translate text' });
  }
});

// New /text-to-speech endpoint
app.post('/text-to-speech', async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Missing text in request body' });
  }

  try {
    const client = new textToSpeech.TextToSpeechClient();
    const request = {
      input: { text },
      voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' },
    };

    const [response] = await client.synthesizeSpeech(request);
    res.set('Content-Type', 'audio/mpeg');
    res.send(response.audioContent);
  } catch (error) {
    console.error('Error in text-to-speech conversion:', error);
    res.status(500).json({ error: 'Failed to convert text to speech' });
  }
});


app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});