// will link to the where notes arrays are being held will initally show notes in json//

var noteInfo = require("../data/noteshere.js");

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        res.json(noteInfo);
    });
//pushes notes to notes array in json//
    app.post("/api/notes", function(req, res){
        noteInfo.push(req.body);
        //is technically a refresh//
        res.redirect("/");
    });

    
    
//call to delete notes//
    app.delete("/api/notes/:id", function(req, res){
        console.log(typeof parseInt(req.params.id, 10));
        var indexSearch = parseInt(req.params.id, 10)
        var toDelete = noteInfo.map(note => note.id).indexOf(indexSearch);
        noteInfo.splice(toDelete, 1);
        console.log(noteInfo);
        //refreshes page and deletes note.
        res.send("/")
        })

};
