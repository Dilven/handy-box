import axios from 'axios';
import { Weather } from '../models/weather';

const baseApiPathname = '/api/';

const getWeather = async (place: string) => {
  console.log('DEBUGGING:  ~ file: internal-api.ts ~ line 7 ~ getWeather ~ place', place);
  const { data } = await axios.get<Weather>(`${baseApiPathname}weather?place=${place}`);
  return data;
}

export const InternalApi = {
  getWeather,
};
