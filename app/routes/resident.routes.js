module.exports = (app) => {
    const residents = require('../controllers/resident.controller.js');

    // Create a new Note
    app.post('/residents', residents.create);

    // Retrieve all Notes
    app.get('/residents', residents.findAll);

    // Retrieve a single Note with noteId
    app.get('/residents/:residentId', residents.findOne);

    // Update a Note with noteId
    app.put('/residents/:residentId', residents.update);

    // Delete a Note with noteId
    app.delete('/residents/:residentId', residents.delete);
}
