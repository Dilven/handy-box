import Boom from '@hapi/boom';
import type { NextApiHandler, NextApiResponse, NextApiRequest } from 'next';

const methods = ['get', 'delete', 'head', 'options', 'post', 'put', 'patch', 'purge', 'link', 'unlink'] as const;
type HttpMethod = typeof methods[number]

// TODO
// eslint-disable-next-line max-len
const isHttpMethod = (method?: string): method is HttpMethod => !!method && methods.some((m) => m === method);

// TODO
// eslint-disable-next-line max-len
export const methodHandler = (handlers: Partial<Record<HttpMethod, NextApiHandler>>) => (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method?.toLowerCase();
  if (!isHttpMethod(method)) throw Boom.notFound();
  const handler = handlers[method];
  if (!handler) throw Boom.notFound();
  handler(req, res);
};
