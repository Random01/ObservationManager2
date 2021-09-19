export const authConfig = {
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
};
