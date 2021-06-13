import Boom from '@hapi/boom';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { methodHandler } from '../../../helpers/method-handler';
import { WeatherSchema } from '../../../schemas/weather';

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=wroclaw&units=metric&appid=${process.env.WEATHER_API_KEY}`)
  try {
    const weather = WeatherSchema.parse(data);
    res.status(200).json(JSON.stringify(weather));
  } catch (e) {
    // logger.info(`Bad search request: ${query}`);
    console.log(e)
    throw Boom.badRequest((e).message, e);
  }
};

export default methodHandler({ get: getHandler });
