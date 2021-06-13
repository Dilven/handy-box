import { DefaultOptions } from 'react-query';

const THIRTY_MINUTES = 1000 * 60 * 30;

export const defaultOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: THIRTY_MINUTES,
  },
};
