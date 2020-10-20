import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID B_XpgqgSOvCfPLafPWpJXOSqzzv32j1ERkYUpI8rMgc',
  },
});
