import Boom from '@hapi/boom';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { methodHandler } from '../../../helpers/method-handler';
import { WeatherSchema } from '../../../schemas/weather';

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const uri = encodeURI(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.place}&units=metric&appid=${process.env.WEATHER_API_KEY}`)
  const { data } = await axios.get(uri)
  try {
    const weather = WeatherSchema.parse(data);
    res.status(200).json(weather);
  } catch (e) {
    // logger.info(`Bad search request: ${query}`);
    console.log(e)
    throw Boom.badRequest((e).message, e);
  }
};

export default methodHandler({ get: getHandler });
