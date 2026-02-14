import axios from 'axios';

const API_URL = '/api/text-to-speech';

export const convertTextToSpeech = async (text: string) => {
  try {
    const response = await axios.post(API_URL, { text }, { responseType: 'blob' });
    return URL.createObjectURL(response.data);
  } catch (error) {
    console.error('Error converting text to speech:', error);
    return null;
  }
};