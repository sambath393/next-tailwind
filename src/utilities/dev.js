export const isDebug = () => process?.env?.NODE_ENV === 'development';

export const getDomain = () => (isDebug() ? 'http://localhost:3000' : 'http://non-in.codedoto.com');

export const getDatabase = () =>
  isDebug() ? process.env.MONGODB_URI_LOCAL : process.env.MONGODB_URI;

export const withDomain = (path = '') => `${getDomain()}${path}`;
