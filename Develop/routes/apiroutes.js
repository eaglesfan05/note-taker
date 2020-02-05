// will link to the where notes arrays are being held will initally show notes in json//

var noteInfo = require("../data/noteshere.js");

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        res.json(noteInfo);
    });
//pushes notes to notes array in json//
    app.post("/api/notes", function(req, res){
        noteInfo.push(req.body);
    });
};
