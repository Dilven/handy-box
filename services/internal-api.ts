import axios from 'axios';
import { Weather } from '../models/weather';

const baseApiPathname = '/api/';

const getWeather = async () => {
  const { data } = await axios.get<Weather>(`${baseApiPathname}weather`);
  return data;
}

export const InternalApi = {
  getWeather,
};
