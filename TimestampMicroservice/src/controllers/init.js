const getinit = (req, res, next) => {
    //res.render('index.html', { title: '@Ricardo1470' });
    //console.log("index");
    res.send('hola mundo')
    next();
};

const getTimestamp = ((req, res, next) => {
    req.time = getTime();
    next();
}, (req, res) => {
    res.json({ time: req.time });
});

/* export functions*/
module.exports = {
    getinit,
    getTimestamp
}