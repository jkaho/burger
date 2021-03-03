// Dependencies
const orm = require('../config/orm');

// Model (database interaction) 
const burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(result) {
            cb(result);
        });
    },
    createOne: function(value, cb) {
        orm.insertOne('burgers', 'burger_name', value, function(result) {
            cb(result);
        });
    },
    updateOne: function(colVal, conditionVal, cb) {
        orm.updateOne('burgers', 'devoured', parseInt(colVal), 'id', conditionVal, function(result) {
            cb(result);
        });
    },
    deleteOne: function(conditionVal, cb) {
        orm.deleteOne('burgers', 'id', conditionVal, function(result) {
            cb(result);
        });
    }
};

// Exports
module.exports = burger;