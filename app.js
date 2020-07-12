const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const v1Routs = require('./api/routes/v1');
const mongoose = require('mongoose');
const userRouts = require('./api/routes/user');
const path = require("path");


mongoose.connect(
    'mongodb+srv://admin:' + process.env.MONGO_ATLAS_PW + '@assignment.evhld.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
);


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//some Cores adjustment
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //all sites/clients
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); //all haeds but mentioned

    if ((req.method === 'OPTIONS')) {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
app.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname + '/api//views/v1.html'));
});

app.use('/v1', v1Routs);
app.use('/user', userRouts);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});



module.exports = app; 