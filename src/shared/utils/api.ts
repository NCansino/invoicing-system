import axios from 'axios';
import { API_URI } from '../constants/environments';

/**
 *  You can use this if you have a custom or direct call for an endpoint
 *  Otherwise u can use server-access.ts for modules service ✨
 */

const api = axios.create({
  baseURL: API_URI,
});

export default api;
