const tacoModel = {
    data: [
        {
            name: 'Captain Beefheart',
            protein: 'Carne Asada',
            garnish: 'cheddar, lettuce, and pico'
        },
        {
            name: 'Piggy Azalea',
            protein: 'Carnitas',
            garnish: 'chile peppers and pineapple'
        }
    ],
    // Create 
    addTaco: function(name, protein, garnish) {
        let newTaco = {
            name: name,
            protein: protein,
            garnish: garnish
        };
        this.data.push(newTaco);
    },
    // Read all tacos
    getAllTacos: function() {
        return this.data;
    },
    // Read a specific taco
    getTaco: function(id) {
        return this.data[id];
    },
    // Update taco
    updateTaco: function(id, name, protein, garnish) {
        let taco = {
            name,
            protein,
            garnish
        };
        this.data[id] = taco;
    },
    // Delete taco
    deleteTaco: function(id) {
        if(id < this.data.length && id >= 0) {
            this.data.splice(id, 1);
        }
    }
};

module.exports = tacoModel;