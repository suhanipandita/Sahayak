import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';
import cors from 'cors';
import textToSpeech from '@google-cloud/text-to-speech';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Helper to get Google Credentials from Environment Variable
// On Vercel, you can't upload a key file easily, so we parse a JSON string env var
const getCredentials = () => {
  if (process.env.GOOGLE_CREDENTIALS) {
    return JSON.parse(process.env.GOOGLE_CREDENTIALS);
  }
  return undefined; // Fallback to default if running locally with key file
};

// -- Routes --

// Note: Routes are prefixed with /api because Vercel serves this file at /api
app.post('/api/translate', async (req, res) => {
  const { text, targetLang } = req.body;
  const apiKey = process.env.GOOGLE_API_KEY;
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  if (!text || !targetLang) {
    return res.status(400).json({ error: 'Missing text or targetLang' });
  }

  try {
    const response = await axios.post(url, { q: text, target: targetLang });
    res.json(response.data);
  } catch (error) {
    console.error('Translation error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to translate text' });
  }
});

app.post('/api/text-to-speech', async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Missing text' });

  try {
    const client = new textToSpeech.TextToSpeechClient({
      credentials: getCredentials()
    });
    
    const request = {
      input: { text },
      voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' },
    };

    const [response] = await client.synthesizeSpeech(request);
    res.set('Content-Type', 'audio/mpeg');
    res.send(response.audioContent);
  } catch (error) {
    console.error('TTS error:', error);
    res.status(500).json({ error: 'Failed to convert text to speech' });
  }
});

// Start server if running locally (not required for Vercel, but good for testing)
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;