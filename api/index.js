const http = require('http');
const httpProxy = require('http-proxy');
require('dotenv').config();

const API_TOKEN = process.env.API_TOKEN;

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  const target = {
    target: 'http://127.0.0.1:1337',
  };

  proxy.on('proxyReq', (proxyReq, req, res, options) => {
    proxyReq.setHeader('Authorization', `Bearer ${API_TOKEN}`);
  });

  proxy.web(req, res, target);
});

const port = 3000; 
server.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
