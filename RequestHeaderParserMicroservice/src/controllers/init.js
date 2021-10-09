const getinit = (req, res, next) => {
    //res.render('index.html', { title: '@Ricardo1470' });
    //console.log("index");
    res.send('hola mundo')
    next();
};

const getHeaders = ((req, res, next) => {
    res.json({ ipaddress: req.connection.remoteAddress, language: req.headers["accept-language"], software: req.headers["user-agent"] });
    next();
});


/* export functions*/
module.exports = {
    getinit,
    getHeaders
}