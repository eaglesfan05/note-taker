const fs = require("fs");

class Store{
    constructor(title, text, id){        
        this.title = title;
        this.text = text;
        this.id = id;
    }
} 

module.exports = new Store();