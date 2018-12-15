
const guest = require('../controllers').guest;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Guest controller main /api endpoint',
  }));

  app.post('/api/guest', guest.create);
  app.get('/api/guest', guest.list);
  app.get('/api/guest/:guestId', guest.retrieve);
};