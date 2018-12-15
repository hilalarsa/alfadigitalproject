const Guest = require('../server/models').Guest;

module.exports = {
    create(req, res) {
        return Guest
            .create({
                name: req.body.name,
            })
            .then(guest => res.status(201).send(guest))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Guest
            .all()
            .then(guest => res.status(200).send(guest))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return Guest
            .findById(req.params.guestId)
            .then(guest => {
                if (!guest) {
                    return res.status(404).send({
                        message: 'Guest Not Found',
                    });
                }
                return res.status(200).send(guest);
            })
            .catch(error => res.status(400).send(error));
    },
};