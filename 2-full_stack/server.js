const http = require('http');
const { Client } = require('pg');

http.createServer(async (req, res) => {
  const client = new Client();
  try {
    await client.connect();
    const { rows } = await client.query('SELECT now()');
    res.end(`API ok, la base repond : ${rows[0].now}`);
  } catch (err) {
    res.statusCode = 503;
    res.end(`Base indisponible : ${err.message}`);
  } finally {
    await client.end().catch(() => {});
  }
}).listen(3000, () => console.log('API sur le port 3000'));
