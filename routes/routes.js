// import other routes
const recipeRoutes = require('./recipes');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    recipeRoutes(app, fs);

};

module.exports = appRouter;