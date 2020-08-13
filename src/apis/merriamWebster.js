import axios from 'axios';

const merriamWebster = axios.create({
  baseURL: 'https://www.dictionaryapi.com/api/v3/references/collegiate/json'
});

export const findPronunciation = term =>
  merriamWebster.get(`/${term}`, {
    params: {
      key: '41631cee-6987-4dbd-8405-a66d725882aa'
    }
  });
