const Resident = require('../models/resident.model.js');

// Create and Save a new resident
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Resident content can not be empty"
        });
    }

    // Create a Resident
    const resident = new Resident({
        name: req.body.name,
        age: req.body.age || 99
    });

    // Save Resident in the database
    resident.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Resident."
        });
    });
};

// Retrieve and return all resident from the database.
exports.findAll = (req, res) => {
    Resident.find()
    .then(residents => {
        res.send(residents);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving residents."
        });
    });
};

// Find a single resident with a residentId
exports.findOne = (req, res) => {
    Resident.findById(req.params.residentId)
    .then(resident => {
        if(!resident) {
            return res.status(404).send({
                message: "Resident not found with id " + req.params.residentId
            });
        }
        res.send(resident);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Resident not found with id " + req.params.residentId
            });
        }
        return res.status(500).send({
            message: "Error retrieving resident with id " + req.params.residentId
        });
    });
};

// Update a resident identified by the residentId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Resident content can not be empty"
        });
    }

    // Find resident and update it with the request body
    Resident.findByIdAndUpdate(req.params.residentId, {
        title: req.body.title || "Untitled Resident",
        content: req.body.content
    }, {new: true})
    .then(resident => {
        if(!resident) {
            return res.status(404).send({
                message: "Resident not found with id " + req.params.residentId
            });
        }
        res.send(resident);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Resident not found with id " + req.params.residentId
            });
        }
        return res.status(500).send({
            message: "Error updating resident with id " + req.params.residentId
        });
    });
};


// Delete a resident with the specified residentId in the request
exports.delete = (req, res) => {
    Resident.findByIdAndRemove(req.params.residentId)
    .then(resident => {
        if(!resident) {
            return res.status(404).send({
                message: "Resident not found with id " + req.params.residentId
            });
        }
        res.send({message: "Resident deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Resident not found with id " + req.params.residentId
            });
        }
        return res.status(500).send({
            message: "Could not delete resident with id " + req.params.residentId
        });
    });
};
