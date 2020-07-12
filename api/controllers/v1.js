const V1 = require('../models/v1');
const User = require('../models/user');

exports.current = (req, res, next) => {
    const user = req.userData;
    User.findById(user.userId)
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json(doc.integer);
            } else {
                res.status(404).json({ message: 'Something went wrong' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

exports.current_put = (req, res, next) => {
    if (req.body.current) {
        const integer = req.body.current;
        if (integer < 0) {
            res.status(422).json({
                error: "Only positive integers allowed"
            });
        }
        const user = req.userData;
        User.findById(user.userId)
            .exec()
            .then(doc => {
                if (doc) {
                    User.update({ _id: user.userId }, { $set: { integer: integer } })
                        .exec()
                        .then(result => {
                            User.findById(user.userId)
                                .exec()
                                .then(user => {
                                    res.status(200).json(user.integer);
                                })
                                .catch(err => {
                                    console.log(err);
                                    res.status(500).json({ error: err })
                                });
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(500).json({
                                error: err
                            });
                        });
                } else {
                    res.status(404).json({ message: 'Something went wrong' });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err })
            })
    }else{
        return res.status(422).json({ 
            message: "invalid/missing argument, correct format <data 'current=10'>",
         })
    }

}


exports.next = (req, res, next) => {
    const user = req.userData;
    User.findById(user.userId)
        .exec()
        .then(doc => {
            if (doc) {
                User.update({ _id: user.userId }, { $set: { integer: (doc.integer + 1) } })
                    .exec()
                    .then(result => {
                        User.findById(user.userId)
                            .exec()
                            .then(user => {
                                res.status(200).json(user.integer);
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({ error: err })
                            });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
            } else {
                res.status(404).json({ message: 'Something went wrong' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })
}


exports.reset = (req, res, next) => {
    const integer = req.params.integer;
    if (integer < 0) {
       return res.status(422).json({
            error: "Only positive integers allowed"
        });
    }
    const user = req.userData;
    User.findById(user.userId)
        .exec()
        .then(doc => {
            if (doc) {
                User.update({ _id: user.userId }, { $set: { integer: integer } })
                    .exec()
                    .then(result => {
                        User.findById(user.userId)
                            .exec()
                            .then(user => {
                                res.status(200).json(user.integer);
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({ error: err })
                            });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
            } else {
                res.status(404).json({ message: 'Something went wrong' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })
}

