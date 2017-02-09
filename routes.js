app.get('/https://www.sivanhuang.com/', function (req, res) {
  if (req.query['hub.verify_token'] === '<sivansivan>') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
})
