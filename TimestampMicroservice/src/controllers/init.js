const getinit = (req, res, next) => {
    //res.render('index.html', { title: '@Ricardo1470' });
    //console.log("index");
    res.send('hola mundo')
    next();
};

const getTimestamp = ((req, res, next) => {
    let timestamp = req.params.timestamp;
    if(timestamp.match(/\d{5,}/)){
        timestamp = +timestamp;
    }

    let date = new Date(timestamp);
    if(date.toUTCString() === 'Invalid Date'){
        res.json({ error: date.toUTCString() });
    }
    res.json({ unix: date.valueOf(), utc: date.toUTCString() }); 
    next();
});

const getTimes = ((req, res, next) => {
    let date = new Date();
    res.json({ unix: date.valueOf(), utc: date.toUTCString() });
    next();
});

/* export functions*/
module.exports = {
    getinit,
    getTimes,
    getTimestamp
}