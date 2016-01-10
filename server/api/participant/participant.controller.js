/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/participants              ->  index
 * POST    /api/participants              ->  create
 * GET     /api/participants/:id          ->  show
 * PUT     /api/participants/:id          ->  update
 * DELETE  /api/participants/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
var Participant = require('./participant.model');

function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function (err) {
        res.status(statusCode).send(err);
    };
}

function responseWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function (entity) {
        if (entity) {
            res.status(statusCode).json(entity);
        }
    };
}

function handleEntityNotFound(res) {
    return function (entity) {
        if (!entity) {
            res.status(404).end();
            return null;
        }
        return entity;
    };
}

function saveUpdates(updates) {
    return function (entity) {
        var updated = _.merge(entity, updates);
        return updated.saveAsync()
            .spread(updated => {
                return updated;
            });
    };
}

function removeEntity(res) {
    return function (entity) {
        if (entity) {
            return entity.removeAsync()
                .then(() => {
                    res.status(204).end();
                });
        }
    };
}

// Gets a list of Participants
export function index(req, res) {
    Participant.findAsync()
        .then(responseWithResult(res))
        .catch(handleError(res));
}

// Gets a single Participant from the DB
export function show(req, res) {
    Participant.findByIdAsync(req.params.id)
        .then(handleEntityNotFound(res))
        .then(responseWithResult(res))
        .catch(handleError(res));
}

// Creates a new Participant in the DB
export function create(req, res) {
    var email = req.body.email;
    var phone = req.body.phone;
    var eventName = req.body.event[0].name;
    console.log(email);
    Participant.find({
        email: req.body.email
    }, function (err, participant) {
        console.log(participant.length);
        if (err) {
            return handleError(res);
        }
        if (participant.length == 0) {
            Participant.createAsync(req.body)
                .then(responseWithResult(res, 201))
                .catch(handleError(res));
        }
        if(participant.length != 0){
            if(participant[0].email == email) {
                for(var i=0; i<participant[0].event.length; i++){
                    if(participant[0].event[i].name === eventName){
                        var foo = true;
                        break;
                    }else{
                        var foo = false;
                    }


                }
                if(foo){
                        res.status(500).send("You have already registered for this event");
                    }else{
                    participant[0].event.push(req.body.event[0]);
                        participant[0].save(function(err, newParticipant){
                            if(err){
                                return handleError(res);
                            }
                            return res.status(200).json(newParticipant)
                        })
                }


            }else{
                Participant.createAsync(req.body)
                .then(responseWithResult(res, 201))
                .catch(handleError(res));

            }
        }
    })



}

export function lookfor(req, res) {
//    Participant.createAsync(req.body)
//                .then(responseWithResult(res, 201))
//                .catch(handleError(res));
    var participant = req.body;

    Participant.find({
        name: participant.name
    }, function (err, participant) {
        res.send(participant);
    })
}

// Updates an existing Participant in the DB
export function update(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Participant.findByIdAsync(req.params.id)
        .then(handleEntityNotFound(res))
        .then(saveUpdates(req.body))
        .then(responseWithResult(res))
        .catch(handleError(res));
}

// Deletes a Participant from the DB
export function destroy(req, res) {
    Participant.findByIdAsync(req.params.id)
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}
