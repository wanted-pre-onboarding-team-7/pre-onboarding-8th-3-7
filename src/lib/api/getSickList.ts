import { client } from './client';

export const getSickList = async (name: string) => {
  const url = `sick?q=${name}`;
  const { data } = await client.get(url);
  return data;
};
