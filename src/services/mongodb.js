/* eslint-disable no-multi-assign */
import { MongoClient } from 'mongodb';
import { getDatabase } from '../utilities/dev';

const MONGODB_URI = getDatabase();
const { MONGODB_DB } = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI from ,env.local');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB from ,env.local');
}

let cached = global.mongo;
if (!cached) cached = global.mongo = {};

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const conn = {};
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    cached.promise = MongoClient.connect(MONGODB_URI, opts)
      .then((client) => {
        conn.client = client;
        return client.db(MONGODB_DB);
      })
      .then((db) => {
        conn.db = db;
        cached.conn = conn;
      });
  }
  await cached.promise;
  return cached.conn;
}
