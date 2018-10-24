const piroshkiModel = {
    data: [
        {
            name: 'Piroshki with Cabbage',
            filling: 'Cabbage and mash potato',
            size: 2
        },
        {
            name: 'Piroshki with Mushroom',
            filling: 'mushrooms and mash potato',
            size: 3
        }
    ],
    // Create 
    addPiroshki: function(name, filling, size) {
        let newPiroshki = {
            name: name,
            filling: filling,
            size: size
        };
        this.data.push(newPiroshki);
    },
    // Read all tacos
    getAllPiroshkis: function() {
        return this.data;
    },
    // Read a specific taco
    getPiroshki: function(id) {
        return this.data[id];
    },
    // Update taco
    updatePiroshki: function(id, name, filling, size) {
        let piroshki = {
            name,
            filling,
            size
        };
        this.data[id] = piroshki;
    },
    // Delete taco
    deletePiroshki: function(id) {
        if(id < this.data.length && id >= 0) {
            this.data.splice(id, 1);
        }
    }
};

module.exports = piroshkiModel;