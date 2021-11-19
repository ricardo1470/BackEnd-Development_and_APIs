const getinit = (req, res, next) => {
    //res.render('index.html', { title: '@Ricardo1470' });
    //console.log("index");
    res.send('hola mundo desde la ruta inicial')
    next();
};

const getUrl = async ((req, res, next) => {
    const rest = await Url.create()
    //res.render('index.html', { title: '@Ricardo1470' })
    //res.send('hola mundo desde algun lugar de la app')
    next();
});


/* export functions*/
module.exports = {
    getinit,
    getUrl
}