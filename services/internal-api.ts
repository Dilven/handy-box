import axios from 'axios';
import { Weather } from '../models/weather';

const baseApiPathname = '/api/';

const getWeather = async (place: string) => {
  const { data } = await axios.get<Weather>(`${baseApiPathname}weather?place=${place}`);
  return data;
}

export const InternalApi = {
  getWeather,
};
