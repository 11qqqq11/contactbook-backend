const express = require('express');
const cors = require('cors');
const contactController = require('./controllers/contact.controller');
const ApiError = require('./api-error');

const app = express();

app.use(cors());
app.use(express.json());

// Handle 404 response. 



app.get('/', (req, res, next) => {
    res.json({ message: 'welcome to contect book application.' });
});

app.route('/api/contacts')
    .get(contactController.findAll)
    .post(contactController.create)
    .delete(contactController.deleteAll);

app.route('/api/contacts/favorite')
    .get(contactController.findAllFavorite);

app.route('/api/contacts/:id')
    .get(contactController.findOne)
    .put(contactController.update)
    .delete(contactController.delete);


app.use((req, res, next) => {
    // Handler for unknown route. 
    // call next() to pass to the error handling middleware. 
    return next(new ApiError(404, 'Resource not found'));
});


// Define error-handling middleware last, after other app.use() and routes calls. 
app.use((error, req, res, next) => {
    // The centralized error handling middleware 
    // In any route handler, calling next(error) 
    // will pass to this error handling middleware. 
    return res.status(error.statusCode || 500).json({
        message: error.message || 'Internal Server Error',
    });
});
module.exports = app;