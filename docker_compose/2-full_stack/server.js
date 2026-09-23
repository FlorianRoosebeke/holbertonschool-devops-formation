const http = require('http');
const { Client } = require('pg');
const { createClient } = require('redis');

const redisHost = process.env.REDIS_HOST || 'redis';
const redisClient = createClient({
  socket: {
    host: redisHost,
    port: 6379
  }
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err.message);
});

(async () => {
  try {
    await redisClient.connect();
    console.log('Connected to Redis');
  } catch (err) {
    console.error('Redis connection failed:', err.message);
  }
})();

http.createServer(async (req, res) => {
  const client = new Client();

  try {
    await client.connect();
    const { rows } = await client.query('SELECT now()');

    let redisStatus = 'unavailable';
    try {
      await redisClient.set('status', 'ok');
      redisStatus = await redisClient.get('status');
    } catch (err) {
      redisStatus = `error: ${err.message}`;
    }

    res.end(`API ok, database: ${rows[0].now}, redis: ${redisStatus}`);
  } catch (err) {
    res.statusCode = 503;
    res.end(`Service unavailable: ${err.message}`);
  } finally {
    await client.end().catch(() => {});
  }
}).listen(3000, () => console.log('API on port 3000'));